import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicApiService } from 'src/Providers/Basic/basic-api.service';
import { CartApiService } from 'src/Providers/Cart/cart-api.service';
import { LocalApiService } from 'src/Providers/Local/local-api.service';
import { ApiService } from 'src/Providers/Services/api.service';
import { environment } from '../../environments/environment';
import { Location } from "@angular/common";
import { ModalController } from '@ionic/angular';
import { OfferdetailsPage } from '../offerdetails/offerdetails.page';
@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
})
export class OfferPage implements OnInit {
  imgpath: any;
  allProducts: any = [];
  postdata: any = {};
  title: any;
  pgtype: any;
  logedUser: any;
  frstdis: any = {};
  frsord: any = {};
  carttotal: any;
  ftrbtnms: any;
  active: any;
  isOffer: any = true;
  winsr: any;
  nownrs: any = true;
  isseeoffer: any = true;
  getappsetng: any;
  constructor(
    public apiService: ApiService,
    public basic: BasicApiService,
	  public localApi: LocalApiService,
	  public cart: CartApiService,
    public route: Router,
    public location: Location,
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.getappsetng = this.localApi.getappseting();
    this.ftrbtnms = [
      {name:'Offers', active:false, clas: 'leftsidehalf'},
      {name:'Winners', active:false, clas: 'rightsidehlf'}
    ];
    this.active = 'Offers';
    this.carttotal = this.cart.getTotalCart();
    this.allProducts = [];
    this.logedUser = this.localApi.getuser();
    if(this.logedUser){
      this.basic.presentLoading();
      this.apiService.postdata('getspecialcoupon', this.logedUser.id).subscribe((resp: any) => {
       
        if(resp.data.order==''){
          this.frsord = {
            description: 'Welcome to '+environment.appname+'. Enjoy a 10% OFF on your first booking with us.',
            heading: '10% off. First Booking Discount',
            id: '',
            image: 'firsttimeoff_statick.jpg',
            min_order_amount: '1.00',
            off_type: 'Percent',
            off_value: '10',
            offer_code: 'FIRST10'
          }
          this.allProducts.push(this.frsord);
        }
        if(resp.data.discount){
          this.frstdis = {
            description: 'This discount is specially for you, you wont see this discount on other users apps. Coz you are Special.',
            heading: resp.data.discount+'% off. Special Discount (Only For You)',
            id: '',
            image: 'specialoffer_statick.jpg',
            min_order_amount: '1.00',
            off_type: 'Percent',
            off_value: resp.data.discount,
            offer_code: 'SPECIAL10'
          }
          this.allProducts.push(this.frstdis);
        }

        setTimeout(()=>{
          this.basic.dismissloader();
          this.getallProducts();
        },1000)
      }, (err: any) => {
      return false;
      });
    } else {

      this.frsord = {
        description: 'Welcome to '+environment.appname+'. Enjoy a 10% OFF on your first booking with us.',
        heading: '10% off. First Booking Discount',
        id: '',
        image: 'firsttimeoff_statick.jpg',
        min_order_amount: '1.00',
        off_type: 'Percent',
        off_value: '10',
        offer_code: 'FIRST10'
      }
      this.allProducts.push(this.frsord);
      this.getallProducts();
    }
    this.imgpath = environment.imagepath;
    this.pgtype = this.activatedRoute.snapshot.paramMap.get('pgtype');
    if(this.pgtype == 'noapply'){
      this.title = 'Offers';
      this.isseeoffer = true;
    } else {
      this.title = 'Apply Coupon';
      this.isseeoffer = false;
    }
  	
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 2000);
  }


  getallProducts(){
    this.basic.presentLoading();
    this.apiService.postdata('getoffer', this.postdata).subscribe((resp: any) => {
      let newdata = resp.data;
      for(let i=0; i < newdata.length; i++){
        this.allProducts.push(newdata[i]);
      }
      setTimeout(()=>{
        this.basic.dismissloader();
      },1000)
      console.log("this.allProducts",this.allProducts);
    }, (err: any) => {
      return false;
    });
    
  }

  appltythis(val){
    var carttotal = parseFloat(this.carttotal);
    var min_order_amount = parseFloat(val.min_order_amount);
    if(carttotal < min_order_amount){
      var morePr = parseFloat(val.min_order_amount) - parseFloat(this.carttotal);
      this.basic.alert('Info:', 'Minimum amount required to redeem this offer is '+this.getappsetng.currency_symbol+val.min_order_amount+', please add another '+this.getappsetng.currency_symbol+morePr.toFixed(2)+' to your order');
    } else {
      this.localApi.setapplyedofr(val);
      this.location.back();
    }
  }

  async offerdetails(itm) {
    const modal = await this.modalController.create({
      component: OfferdetailsPage,
      cssClass: 'my-custom-class',
      backdropDismiss: true,
      componentProps: {
        'item': itm,
     },
    });
    return await modal.present();
  }

  viewmycart(){
    this.route.navigate(['/booknow']);
  }


}
