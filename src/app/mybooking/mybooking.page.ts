import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AlertController, MenuController } from '@ionic/angular';
import { BasicApiService } from 'src/Providers/Basic/basic-api.service';
import { LocalApiService } from 'src/Providers/Local/local-api.service';
import { ApiService } from 'src/Providers/Services/api.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.page.html',
  styleUrls: ['./mybooking.page.scss'],
})
export class MybookingPage implements OnInit {
  data: any         = {};
  postdata: any     = {};
  deltimelist: any  = [];
  chsdeltime: any;
  datetime: any;
  ipbroptions: any = {};
  getappsetng: any;
  constructor(
    public menuCtrl: MenuController,
    public apiService: ApiService,
    public basic: BasicApiService,
    public localApi: LocalApiService,
    public route: Router,
    private iab: InAppBrowser,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.getappsetng = this.localApi.getappseting();
    console.log("this.getappsetng", this.getappsetng);
  }

  async opendatetimedel() {
    const alert = await this.alertController.create({
      cssClass: 'freeddelmessage',
      header: 'Select date',
      inputs: [
        {
          name: 'del_date',
          type: 'date',
          placeholder: 'Select a date'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'OK',
          handler: (val) => {
            if(!val.del_date){
              this.basic.alert('Error', 'Please choose a date');
              return false;
            } else {
              this.getdeltimes(val.del_date);
              return true;
              console.log(val);
            }
            
          }
        }
      ]
    });

    await alert.present();
  }

  getdeltimes(date){
    this.postdata.snddate = date;
    this.basic.presentLoading();
    this.apiService.postdata('getdeltimebreak', this.postdata).subscribe((resp: any) => {
      let timesdel = resp.data;
      console.log(timesdel.status);
      if(timesdel.status=='Close'){
        this.basic.alert('Info:', timesdel.message);
      } else {
        let theNewInputs = [];
        for(let i=0; i < timesdel.length; i++){
          theNewInputs.push(
            {
              name: 'deltimmy',
              type: 'radio',
              value: timesdel[i].datename +' - '+timesdel[i].value +' - '+date,
              checked: false,
              label: timesdel[i].datename +' - '+timesdel[i].value
            }
          );
        }
        this.deltimelist = theNewInputs;
      }
      setTimeout(()=>{
        this.basic.dismissloader();
        if(timesdel.status!='Close'){
          this.opndeltimelist();
        }
      },1000)
    }, (err: any) => {
      this.basic.dismissloader();
    return false;
    });
  }

  async opndeltimelist() {
    const alert = await this.alertController.create({
      cssClass: 'freeddelmessages',
      header: 'Select a time',
      inputs: this.deltimelist,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'OK',
          handler: (val) => {
            if(val){
              if(val=='future'){
                this.opendatetimedel();
              } else {
                console.log("val",val);
                this.localApi.setdeltime(val);

                var delday = val.split(' -')[0];
                var deltm = val.split(' -')[1];
                this.chsdeltime = delday+' - '+deltm;
                this.datetime = val;
              }
            }
          }
        }
      ]
    });

    await alert.present();
  }

  booknow(){
    this.data.date = this.datetime;
    this.data.pay_amount = this.getappsetng.deposit_amount;
  	if(!this.data.fullname){
  		this.basic.alert('Info:', 'Enter your full name');
  	} else if(!this.data.mobile){
  		this.basic.alert('Info:', 'Enter your contact number');
  	}else if(!this.data.email){
  		this.basic.alert('Info:', 'Enter your email');
  	} else if(!this.chsdeltime){
  		this.basic.alert('Info:', 'Enter a date and time');
  	} else {
      this.openpayform(this.data);
  	}
  }

  openpayform(data) {
    console.log("data",data);
    this.ipbroptions = {
       location: 'no',
       hardwareback: 'yes',
       hidenavigationbuttons: 'no',
       hideurlbar: 'yes',
       fullscreen: 'yes',
       zoom: 'no',
       clearcache: 'yes',
       toolbar: 'yes',
       usewkwebview: 'yes'
    };
   const browser = this.iab.create(environment.baseurl+'restapi/stripe_payment/'+data.pay_amount+'/'+data.email, '_blank', this.ipbroptions);
   browser.on('loadstop').subscribe(event => {
     console.log(event);
     if (event.url==environment.baseurl+'restapi/thankyou/') {
       browser.close();
      this.basic.presentLoading();
      this.apiService.postdata('savecateringenq',data).subscribe((resp: any) => {
        setTimeout(()=>{
          this.basic.dismissloader();
          this.basic.alert('Thanks!', resp.thnk_msg);
          this.data = {};
        },1000)
      }, (err: any) => {
      	return false;
      });
     }
     if (event.url==environment.baseurl+'restapi/failedpayment/') {
       browser.close(); 
       this.basic.alert('Payment Error:', 'There was a problem processing your payment. Please check the details and try again. If you still have issues please speak to your card issuer.'); 
     }      
   });
 }

}
