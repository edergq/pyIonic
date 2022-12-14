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
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
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
  extrnote: any;
  shipping: any = {};
  shippingcost: any = {};
  apldofrs: any;
  pay_amount: any = 0;
  offer_text: any = '';
  off_amount: any;
  dicuctamnt:any;
  pay_amt_flt: any;
  preord: any;
  prord_price: any;
  aftrpreord: any;
  getappsetng: any;
  taxvalue: any;
  totaladditional: any;
  order_type: any;
  isDeliveryOrd: any = true;
  chsdeltime:  any;
  delvrxtx: any;
  pgtawurl: any;
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
    private platform: Platform
    ) { }

  ngOnInit() {
    this.imgpath = environment.imagepath;
  }

  editcart(){
    this.route.navigate(['/booknow']);
  }

  ionViewWillEnter(){
    var chsdeltime = this.localApi.getdeltime();
    var delday = chsdeltime.split(' -')[0];
    var deltm = chsdeltime.split(' -')[1];
    this.chsdeltime = delday+' - '+deltm;

    
    this.order_type = this.localApi.getordertype();
    if(this.order_type=='Delivery'){
      this.isDeliveryOrd = true;
    } else {
      this.isDeliveryOrd = false;
    }
    this.getappsetng = this.localApi.getappseting();

    if(this.getappsetng.pay_getaway=='stripe'){
      this.pgtawurl = 'stripe_payment';
    }
    if(this.getappsetng.pay_getaway=='squareup'){
      this.pgtawurl = 'squarepayment';
    }

    
    var totaladditional = parseFloat(this.getappsetng.additional_one_value)+parseFloat(this.getappsetng.additional_two_value)+parseFloat(this.getappsetng.additional_three_value) 
    this.totaladditional = totaladditional.toFixed(2);
    
    this.imgpath = this.basic.imagepas();
    this.logedUser = this.localApi.getuser();
    this.extrnote = this.localApi.getxtrnt();
    this.getallProducts();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      this.getallProducts();
      event.target.complete();
    }, 2000);
  }

  BackButtonAction() {
    if(this.order_type=='Collect'){
      this.route.navigate(['/mycart']);
    }
  }

  getallProducts(){
    this.order_type = this.localApi.getordertype();
  	this.mycart = this.cart.getcart();
    let preord = [];
    let nrmord = [];
    for(let i=0; i < this.mycart.length; i++){
      if(this.mycart[i].preorder=='Yes'){
        preord.push(this.mycart[i]);
      } else {
        nrmord.push(this.mycart[i]);
      }
    }
    console.log('preord', preord);
    console.log('Nor_preord', nrmord);
    console.log('My Cart', this.mycart);
    if(preord.length > 0 && nrmord.length > 0){
      this.preord = preord;
    } else {
      this.preord = [];
    }

    this.carttotal = this.cart.getTotalCart();
    this.cartcount = this.mycart.length;
    
    if(this.order_type=='Delivery'){
      this.shippingcost = this.localApi.getdelcost();
      this.shipping = this.localApi.getdeladrs();
      if(this.shippingcost.price > 0){
        this.delvrxtx = '+ '+this.getappsetng.currency_symbol+this.shippingcost.price;
      } else {
        this.delvrxtx = 'FREE';
      }
    } else {
      this.shippingcost.price = '0.00';
      this.shipping.id = '0';
    }
    

    this.apldofrs = this.localApi.getapplyedofr();


    if(this.getappsetng.tax_lebel){
      var taxvalue = parseFloat(this.carttotal)*parseFloat(this.getappsetng.tax_value)/100;
      this.taxvalue = taxvalue.toFixed(2);
    } else {
      this.taxvalue = '0.00';
    }


    

    if(this.apldofrs){
      if(this.apldofrs.off_type=='Flat'){
        this.offer_text = 'Flat '+this.getappsetng.currency_symbol+this.apldofrs.off_value+' diccount applied';
        this.off_amount = this.apldofrs.off_value;
      } else {
        this.offer_text = this.apldofrs.off_value+'% diccount applied';
        this.dicuctamnt = (this.carttotal*this.apldofrs.off_value)/100;
        this.off_amount = this.dicuctamnt.toFixed(2);
      }

      this.pay_amt_flt = parseFloat(this.carttotal)-parseFloat(this.off_amount)+parseFloat(this.shippingcost.price);

      if(this.preord.length > 0){
        if(this.order_type=='Delivery'){
          this.prord_price = this.shippingcost.price;
        } else {
          this.prord_price = '0.00';
        }

        this.aftrpreord = parseFloat(this.pay_amt_flt)+parseFloat(this.prord_price)+parseFloat(this.taxvalue)+parseFloat(this.totaladditional);

        this.pay_amount = this.aftrpreord.toFixed(2);

      } else {
        var pay_amt_flt = parseFloat(this.pay_amt_flt)+parseFloat(this.taxvalue)+parseFloat(this.totaladditional);
        this.pay_amount = pay_amt_flt.toFixed(2);
      }

    } else {

      if(this.preord.length > 0){
        if(this.order_type=='Delivery'){
          this.prord_price = this.shippingcost.price;
        } else {
          this.prord_price = '0.00';
        }
        this.pay_amt_flt = parseFloat(this.carttotal)+parseFloat(this.shippingcost.price)+parseFloat(this.prord_price)+parseFloat(this.taxvalue)+parseFloat(this.totaladditional);

        this.pay_amount = this.pay_amt_flt.toFixed(2);
      } else {
        this.pay_amt_flt = parseFloat(this.carttotal)+parseFloat(this.shippingcost.price)+parseFloat(this.taxvalue)+parseFloat(this.totaladditional);
        this.pay_amount = this.pay_amt_flt.toFixed(2);
      }
    }
  }


  
  gohome(){
    this.route.navigate(['/home']);
  }
  continueShp(){
  	// this.location.back();
    this.route.navigate(['/addressbook/checkout']);
  }

async viewpayoption(){
  const actionSheet = await this.actionSheetController.create({
      header: 'Please choose a payment option:',
      cssClass: 'ordtypewrapper',
      buttons: [{
        text: "Pay by Card",
        handler: () => {
          this.unpaidorder('Card'); 
        }
      }, {
        text: "Pay by Cash",
        handler: () => {
          this.paymentaccepted('Cash');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
}


  // PAYMENT AND PLACE ORDER===================
  openpayform(payby) {

     this.logedUser = this.localApi.getuser();
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
    const browser = this.iab.create(environment.baseurl+'restapi/stripe_payment/'+this.pay_amount+'/'+this.logedUser.email, '_blank', this.ipbroptions);
    browser.on('loadstop').subscribe(event => {
      console.log(event);
      if (event.url==environment.baseurl+'restapi/thankyou/') {
        browser.close();
        this.paymentaccepted(payby);
      }
      if (event.url==environment.baseurl+'restapi/failedpayment/') {
        browser.close(); 
        this.basic.alert('Payment Error:', 'There was a problem processing your payment. Please check the details and try again. If you still have issues please speak to your card issuer.'); 
      }      
    });
  }

  unpaidorder(payby){
    this.logedUser = this.localApi.getuser();
    this.mycart = this.cart.getcart();

    this.ordervalue.user_id = this.logedUser.id;
    this.ordervalue.order_type = this.order_type;
    this.ordervalue.pay_amount = this.pay_amount;
    this.ordervalue.cart_total = this.carttotal;
    this.ordervalue.items = this.mycart;
    this.ordervalue.delivery_cost = this.shippingcost.price;
    this.ordervalue.extra_note = this.extrnote;
    this.ordervalue.delivery_id = this.shipping.id;
    this.ordervalue.payby = payby;
    if(this.platform.is('android')){
      this.ordervalue.device = 'Android';
    }
    else{
      this.ordervalue.device = 'iOS';
    }
    var deltime = this.localApi.getdeltime();
    this.ordervalue.deltime = deltime.split('- ')[1];
    this.ordervalue.deldate = deltime.substring(0, 3);
    
    
    if(this.apldofrs){
      this.ordervalue.offer_text = this.offer_text;
      this.ordervalue.offer_type = this.apldofrs.off_type;
      this.ordervalue.offer_amount = this.off_amount;
      this.ordervalue.offer_code = this.apldofrs.offer_code;
    }
    this.ordervalue.pre_order_delivery = this.prord_price;
    if(this.getappsetng.tax_lebel){
      this.ordervalue.tax_lebel = this.getappsetng.tax_lebel+' ('+this.getappsetng.tax_value+'%)';
      this.ordervalue.tax_value = this.taxvalue;
    }
    
    this.basic.presentLoading();
    this.apiService.postdata('placemyorderunpaid', this.ordervalue).subscribe((resp: any) => {
      console.log('User', resp);
      setTimeout(()=>{
        this.basic.dismissloader();
        this.openpayform(payby);
      },1000)
    }, (err: any) => {
    return false;
    });
  }

  gotncpg(val){
    if(val=='tnc'){
      this.route.navigate(['aboutus/Terms and Conditions']);
    }
    if(val=='pvp'){
      this.route.navigate(['aboutus/Privacy Policy']);
    }
  }

  paymentaccepted(payby){
    this.logedUser = this.localApi.getuser();
    this.mycart = this.cart.getcart();

    this.ordervalue.user_id = this.logedUser.id;
    this.ordervalue.order_type = this.order_type;
    this.ordervalue.pay_amount = this.pay_amount;
    this.ordervalue.cart_total = this.carttotal;
    this.ordervalue.items = this.mycart;
    this.ordervalue.delivery_cost = this.shippingcost.price;
    this.ordervalue.extra_note = this.extrnote;
    this.ordervalue.delivery_id = this.shipping.id;
    this.ordervalue.payby = payby;
    if(this.platform.is('android')){
      this.ordervalue.device = 'Android';
    }
    else{
      this.ordervalue.device = 'iOS';
    }
    if(payby == 'Card'){
      this.ordervalue.pay_status = 'Paid';
    }
    else{
      this.ordervalue.pay_status = 'Unpaid';
    }
    var deltime = this.localApi.getdeltime();
    this.ordervalue.deltime = deltime.split(' -')[1];
    this.ordervalue.deldate = deltime.split(' -')[0];
    this.ordervalue.deldt = deltime.split(' -')[2];
    
    
    if(this.apldofrs){
      this.ordervalue.offer_text = this.offer_text;
      this.ordervalue.offer_type = this.apldofrs.off_type;
      this.ordervalue.offer_amount = this.off_amount;
      this.ordervalue.offer_code = this.apldofrs.offer_code;
    }
    this.ordervalue.pre_order_delivery = this.prord_price;
    if(this.getappsetng.tax_lebel){
      this.ordervalue.tax_lebel = this.getappsetng.tax_lebel+' ('+this.getappsetng.tax_value+'%)';
      this.ordervalue.tax_value = this.taxvalue;
    }
    this.basic.presentLoading();
    this.apiService.postdata('placemyorder', this.ordervalue).subscribe((resp: any) => {
      console.log('Orders', resp);
      
        setTimeout(()=>{
          this.basic.dismissloader();
          this.localApi.removedeladrs();
          this.localApi.removedelcost();
          this.localApi.removextrnt();
          this.localApi.removeapplyedofr();
          this.cart.removeCart();
          this.localApi.removeordertype();
          this.localApi.removedeltime();
          this.route.navigate(['/orderdetails/'+resp.data+'/New']);
        },1000)
    }, (err: any) => {
    return false;
    });
  }

}
