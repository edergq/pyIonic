import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController, ModalController, Platform } from '@ionic/angular';
import { BasicApiService } from 'src/Providers/Basic/basic-api.service';
import { LocalApiService } from 'src/Providers/Local/local-api.service';
import { ApiService } from 'src/Providers/Services/api.service';
import { environment } from '../../environments/environment';
import { Location } from "@angular/common";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {
  imgpath: any;
  postdata: any = {};
  cnt: any;
  pgtype: any = 'Contact Us';
  ipbroptions: any = {};
  apnme: any;
  constructor(
  	public menuCtrl: MenuController,
    public apiService: ApiService,
    public basic: BasicApiService,
	  public localApi: LocalApiService,
    public route: Router,
    public alertController: AlertController,
    public location: Location,
    public modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private platform: Platform,
    private iab: InAppBrowser,
    private callNumber: CallNumber,
    private emailComposer: EmailComposer,
  ) { }

  ngOnInit() {
    this.apnme      = environment.appname;
  	this.pgtype     = 'Contact Us';
    this.imgpath    = environment.imagepath;
    this.getallProducts();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      this.getallProducts();
      event.target.complete();
    }, 2000);
  }

  getallProducts(){
  	this.postdata.pgtype    = this.pgtype;
  	this.postdata.about     = 'OK';
    this.basic.presentLoading();
	  this.apiService.postdata('getallcms', this.postdata).subscribe((resp: any) => {
		  this.cnt                = resp.data[0];
      setTimeout(()=>{
        this.basic.dismissloader();
      },1000)
    }, (err: any) => {
      return false;
    });
  }

  acnfr(frwht, val){
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
    if(frwht=='address'){
      if (this.platform.is('android')) {
        const browser = this.iab.create('geo:0,0?q='+val, '_system', this.ipbroptions);
      } else {
        const browser = this.iab.create('maps://?q='+val, '_system', this.ipbroptions);
      } 
    }
    if(frwht=='website'){
      const browser = this.iab.create(val, '_blank', this.ipbroptions);
    }
    if(frwht=='whatsapp'){
      const browser = this.iab.create('https://api.whatsapp.com/send?phone='+environment.mobileprefix+val, '_system', this.ipbroptions);
    }
    if(frwht == 'call'){
    	this.callNumber.callNumber(val, true)
    }
    if(frwht =='email'){
		let email = {
			to: val,
			subject: 'Enquiry from V1 Salon',
			body: '',
			isHtml: true
		}
		this.emailComposer.open(email);
    }
  }

}
