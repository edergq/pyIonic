import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/Providers/Services/api.service';
import { MenuController, AlertController, ModalController, ActionSheetController, Platform } from '@ionic/angular';
import { BasicApiService } from 'src/Providers/Basic/basic-api.service';
import { LocalApiService } from 'src/Providers/Local/local-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import * as $ from 'jquery'
import { CartApiService } from 'src/Providers/Cart/cart-api.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { environment } from '../../environments/environment';
import { LoginpagePage } from '../loginpage/loginpage.page';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.page.html',
  styleUrls: ['./booknow.page.scss'],
})
export class BooknowPage implements OnInit {
  imgpath: any;
  category_id: any;
  mycart: any;
  carttotal: any;
  title: any;
  allProducts: any;
  postdata: any = {};
  nowqty: any;
  nowval: any;
  cartcount: any;
  logedUser: any;
  ipbroptions: any = {};
  ordervalue: any = {};
  extranotes: any = '';
  apldofrs: any;
  pay_amount: any = 0;
  offer_text: any = '';
  off_amount: any;
  dicuctamnt:any;
  payamuntcalc: any;
  getappsetng: any;
  taxvalue: any;
  totaladditional: any;
  extrasitm: any;
  isRestricktn: any = false;
  restrictns_lbl: any;
  restrictns_txt: any;
  deltimelist: any = [];
  chsdeltime: any;
  isShopclose: any = false;
  closetxt: any;
  isKeyboardHide: any = false;
  mrprcfrdelfree: any;
  restfredelprx: any;
  isordertomorrow: any = false;
  nextdeday: any;
  nexttime: any;
  hrsfr: any;
  hrert: any;
  constructor(
    public menuCtrl: MenuController,
    public apiService: ApiService,
    public basic: BasicApiService,
    public localApi: LocalApiService,
    public cart: CartApiService,
    public route: Router,
    public alertController: AlertController,
    public location: Location,
    public modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    public actionSheetController: ActionSheetController,
    private iab: InAppBrowser,
    private platform: Platform,
    private keyboard: Keyboard
  ) { }

  ngOnInit() {
    this.localApi.removeapplyedofr();
    this.logedUser = this.localApi.getuser();
    if(this.logedUser){
      if(!this.logedUser.device || !this.logedUser.token){
        this.updateuserdetails();
      }
    }
  }

  ionViewWillEnter(){
    localStorage.setItem(environment.storage_prefix+"bktohome", 'OK');
    this.imgpath            = environment.imagepath;
    this.logedUser          = this.localApi.getuser();
    this.getappsetng        = this.localApi.getappseting();
   
    if(this.getappsetng.timeslot[0].datename != 'Today'){
      this.isordertomorrow  = true;
      this.nextdeday        = this.getdayfullname(this.getappsetng.timeslot[0].datename);
      this.nexttime         = this.tConv24(this.getappsetng.timeslot[0].value);
    }
    
    if(this.getappsetng.restrictions_label){
      this.restrictns_lbl   = this.getappsetng.restrictions_label;
      this.restrictns_txt   = this.getappsetng.restrictions_text;
    }

    this.localApi.removedeladrs();
    this.localApi.removedelcost();
    this.localApi.removextrnt();
    var totaladditional   = parseFloat(this.getappsetng.additional_one_value)+parseFloat(this.getappsetng.additional_two_value)+parseFloat(this.getappsetng.additional_three_value) 
    this.totaladditional  = totaladditional.toFixed(2);

    var chsdeltime        = this.localApi.getdeltime();
    if(chsdeltime){
      var delday          = chsdeltime.split(' -')[0];
      var deltm           = chsdeltime.split(' -')[1];
      this.chsdeltime     = delday+' - '+deltm;
    }
    this.getallProducts();

    this.keyboard.onKeyboardWillShow().subscribe(()=>{
      this.isKeyboardHide   = false;
    });

    this.keyboard.onKeyboardWillHide().subscribe(()=>{
      this.isKeyboardHide   = true;
    });
  }

  tConv24(time24) {
    var ts = time24;
    this.hrsfr = +ts.substr(0, 2);
    this.hrert = (this.hrsfr % 12) || 12;
    this.hrert = (this.hrert < 10)?("0"+this.hrert):this.hrert;  // leading 0 at the left for 1 digit hours
    var ampm = this.hrsfr < 12 ? " AM" : " PM";
    ts = this.hrert + ts.substr(2, 3) + ampm;
    return ts;
  }

  async clearmycart() {
    let alert = await this.alertController.create({
      header: 'Attention!',
      message: 'This will clear all services in your cart. Do you wish to continue?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
            this.cart.removeCart();
            this.ionViewWillEnter();
          }
        }
      ]
    });
    await alert.present();
  }

  getdayfullname(name){
    var dayname = {
      'Mon': 'Monday',
      'Tue': 'Tuesday',
      'Wed': 'Wednesday',
      'Thu': 'Thursday',
      'Fri': 'Friday',
      'Sat': 'Saturday',
      'Sun': 'Sunday',
    }
    return dayname[name];

  }

  updateuserdetails(){
    this.logedUser = this.localApi.getuser();
    if(this.logedUser){
      this.logedUser.token = localStorage.getItem(environment.storage_prefix+'userdevicetoken');
      
      if(this.platform.is('android')){
        this.logedUser.device_type = 'Android';
      }
      else{
        this.logedUser.device_type = 'iOS';
      }
      
      this.apiService.postdata('userfoceupdate', this.logedUser).subscribe((resp: any) => {
        this.localApi.setuser(resp.data);
        this.logedUser = this.localApi.getuser();
      }, (err: any) => {
      return false;
      });
    }
  }

  cancelcpn(){
    this.localApi.removeapplyedofr();
    this.ionViewWillEnter();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      this.getallProducts();
      event.target.complete();
    }, 2000);
  }

  checkshopstatus(){
    if(this.getappsetng.opentime.toDayShop=='CLOSE'){
      this.isShopclose = true;
      this.closetxt = this.getappsetng.opentime;
    } else {
      // this.getdeltimes();
    }
  }
  noshopping(){
    this.isShopclose = false;
    // this.getdeltimes();
  }

  getallProducts(){
    this.getappsetng        = this.localApi.getappseting();
    console.log("this.getappsetng",this.getappsetng);
    this.mycart             = this.cart.getcart();

    this.carttotal          = this.cart.getTotalCart();
    this.cartcount          = this.mycart.length;
    if(this.cartcount > 0){
      this.isKeyboardHide   = true;
    } else {
      this.isKeyboardHide   = true;
    }
    if(this.getappsetng.tax_lebel){
      var taxvalue          = parseFloat(this.carttotal)*parseFloat(this.getappsetng.tax_value)/100;
      this.taxvalue         = taxvalue.toFixed(2);
    } else {
      this.taxvalue         = '0.00';
    }

    this.apldofrs = this.localApi.getapplyedofr();

    if(this.apldofrs){
      if(this.apldofrs.off_type=='Flat'){
        this.offer_text = 'Flat '+this.getappsetng.currency_symbol+this.apldofrs.off_value+' diccount applied';
        this.off_amount = this.apldofrs.off_value;
      } else {
        this.offer_text = this.apldofrs.off_value+'% discount applied';
        this.dicuctamnt = (this.carttotal*this.apldofrs.off_value)/100;
        this.off_amount = this.dicuctamnt.toFixed(2);
      }
      this.payamuntcalc = parseFloat(this.carttotal)-parseFloat(this.off_amount);
      var pay_amount = parseFloat(this.payamuntcalc)+parseFloat(this.taxvalue)+parseFloat(this.totaladditional);
      this.pay_amount = pay_amount.toFixed(2);
      // this.pay_amount = this.carttotal;
    } else {
      var pay_amount = parseFloat(this.carttotal)+parseFloat(this.taxvalue)+parseFloat(this.totaladditional);
      this.pay_amount = pay_amount.toFixed(2);
    }
    if(this.getappsetng.delivery_free > this.carttotal){
      var restfredelprx = parseFloat(this.getappsetng.delivery_free)-parseFloat(this.carttotal);
      this.restfredelprx = restfredelprx.toFixed(2);
      this.mrprcfrdelfree = 'Get FREE.Add another '+this.getappsetng.currency_symbol+this.restfredelprx;
    } else {
      this.mrprcfrdelfree = '';
    }
  }

  getdeltimes(date){
    this.postdata.snddate = date;
    this.basic.presentLoading();
    this.apiService.postdata('getdeltimebreak', this.postdata).subscribe((resp: any) => {
      let timesdel = resp.data;
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
      header: 'Select time',
      subHeader: this.mrprcfrdelfree,
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
                this.localApi.setdeltime(val);

                var delday = val.split(' -')[0];
                var deltm = val.split(' -')[1];
                this.chsdeltime = delday+' - '+deltm;
              }
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async opendatetimedel() {
    const alert = await this.alertController.create({
      cssClass: 'freeddelmessage',
      header: 'Select date',
      subHeader: this.mrprcfrdelfree,
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
            }
            
          }
        }
      ]
    });

    await alert.present();
  }


  addqty(itm){
    this.cancelcpn();
    this.nowqty = '';
    this.nowval = '';
    this.nowqty = $('#itmqtyval_'+itm.id).html();
    this.nowval = parseInt(this.nowqty)+1;
    $('#itmqtyval_'+itm.id).html(this.nowval);
    this.cart.plusqnty(itm);
    this.getallProducts();
  }
  munisqty(itm){
    this.cancelcpn();
    this.nowqty = '';
    this.nowval = '';
    this.nowqty = $('#itmqtyval_'+itm.id).html();
    this.nowval = parseInt(this.nowqty)-1;
    $('#itmqtyval_'+itm.id).html(this.nowval);
    this.cart.minusqntyfrmprod(itm);
    this.getallProducts();
  }

  continueShp(){
    this.location.back();
  }
  alrestclose(){
    this.isRestricktn = false;
    this.isordertomorrow = false;
  }
  callforprocessd(){
    console.log("this.getappsetng",this.getappsetng);
    if(this.getappsetng.restrictions_label){
      this.isRestricktn = true;
    } else if(!this.chsdeltime){
      this.basic.alert('Select Date and Time:', 'Please choose date and time');
    } else {
      this.processed();
    }
  }
  async procesingtime() {
    const alert = await this.alertController.create({
      header: 'Cooking Times:',
      message: this.getappsetng.preparation_time,
      buttons: [{
          text: 'OK',
          handler: () => {
            this.processed();
          }
        }
      ]
    });

    await alert.present();
  }


  processed(){
    var chsdeltime = this.localApi.getdeltime();
    if(!chsdeltime){
      this.basic.alert('Error:', 'Please chhose date and time');
    } else {
      this.logedUser = this.localApi.getuser();
      if(this.logedUser){
        var carttotal = parseFloat(this.carttotal);
        var min_amount_checkout = parseFloat(this.getappsetng.min_amount_checkout);

        if(carttotal < min_amount_checkout){
          var morePr = parseFloat(this.getappsetng.min_amount_checkout) - parseFloat(this.carttotal);
          this.basic.alert('Info:', 'Minimum Booking Value is '+this.getappsetng.currency_symbol+this.getappsetng.min_amount_checkout+', Please add another '+this.getappsetng.currency_symbol+morePr.toFixed(2)+' worth of services');
        } else {
          this.openorderoption();
        }
      } else {
        this.openloginpanel()
      }
    }
  }

  async openloginpanel() {
    console.log('OK');
    const modal = await this.modalController.create({
      component: LoginpagePage,
      cssClass: 'my-custom-class',
      backdropDismiss: true
    });
    modal.onDidDismiss().then((data) => {
      console.log('data', data);
      if(data.data){
        this.processed();
      }
    });
    return await modal.present();
  }



  async openorderoption() {
    this.route.navigate(['/checkout']);
  }

  gofers(){
    this.logedUser = this.localApi.getuser();
    if(this.logedUser){
      this.route.navigate(['/offer/apply']);
    } else {
      this.openlogforofr();
    }
  }

  async openlogforofr() {
    const modal = await this.modalController.create({
      component: LoginpagePage,
      cssClass: 'my-custom-class',
      backdropDismiss: true
    });
    modal.onDidDismiss().then((data) => {
      console.log('data', data);
      if(data.data){
        this.route.navigate(['/offer/apply']);
      }
    });
    return await modal.present();
  }

  homego(){
    this.route.navigate(['/homepage']);
  }

  removeXtrs(item){
    this.cart.deleteProduct(item);
    this.ionViewWillEnter();
  }

}
