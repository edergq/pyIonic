import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController, ModalController } from '@ionic/angular';
import { BasicApiService } from 'src/Providers/Basic/basic-api.service';
import { CartApiService } from 'src/Providers/Cart/cart-api.service';
import { LocalApiService } from 'src/Providers/Local/local-api.service';
import { ApiService } from 'src/Providers/Services/api.service';
import { environment } from '../../environments/environment';
import { Location } from "@angular/common";
import * as $ from 'jquery';
import { ItemdetailsPage } from '../itemdetails/itemdetails.page';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  imgpath: any;
  category_id: any;
  sub_category_id: any;
  mycart: any;
  carttotal: any;
  title: any;
  allProducts: any;
  postdata: any = {};
  nowqty: any;
  nowval: any;
  cartcount: any;
  isPrd: any = true;
  getappsetng: any;
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
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getappsetng      = this.localApi.getappseting();
    this.imgpath          = environment.imagepath;
  	this.category_id      = this.activatedRoute.snapshot.paramMap.get('category');
    this.sub_category_id  = this.activatedRoute.snapshot.paramMap.get('subcategory');
  	this.title = this.activatedRoute.snapshot.paramMap.get('title');
  	this.getallProducts();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getallProducts();
      event.target.complete();
    }, 2000);
  }

  ionViewWillEnter(){
    this.totlaofcart();
    this.mycart = this.cart.getcart();
    this.carttotal = this.cart.getTotalCart();
    this.cartcount = this.mycart.length;
    this.basic.getObservable().subscribe((data) => {
        this.totlaofcart();
    });
  }


  totlaofcart(){
    this.mycart = this.cart.getcart();
    this.carttotal = this.cart.getTotalCart();
    this.cartcount = this.mycart.length;
  }

  getallProducts(){
  	this.totlaofcart();
    this.postdata.category_id       = this.category_id;
    this.postdata.sub_category_id   = this.sub_category_id;
    this.basic.presentLoading();
	  this.apiService.postdata('getproducts', this.postdata).subscribe((resp: any) => {
      this.allProducts = resp.data;
      if(this.allProducts.length > 0){
        this.isPrd = true;
      } else {
        this.isPrd = false;
      }
      for(let i=0; i < this.allProducts.length; i++){
        let single                    = this.allProducts[i];
        let qty                       = this.cart.getSingleQty(single.id);
        this.allProducts[i].qty       = qty;
        this.allProducts[i].crtbtn    = 'Select';
        if(this.allProducts[i].hours_time){
          this.allProducts[i].corner_text = this.allProducts[i].hours_time+' Hour';
        }
        if(this.allProducts[i].minutes_time){
          this.allProducts[i].corner_text = this.allProducts[i].minutes_time+' Minutes';
        }
        if(this.allProducts[i].hours_time && this.allProducts[i].minutes_time){
          this.allProducts[i].corner_text = this.allProducts[i].hours_time+' Hour '+this.allProducts[i].minutes_time+' Minutes';
        }
      }
      setTimeout(()=>{
        this.basic.dismissloader();
      },1000)
    }, (err: any) => {
    return false;
    });
  }

  addtoCart(itm){
    $('#addcartbtn_'+itm.id).hide();
    $('#qtycartbtn_'+itm.id).show();
    $('#itmqty_'+itm.id).html('1');
    this.cart.addcart(itm,'','','');
    this.totlaofcart();
  }

  minusqty(itm){
    this.nowqty = '';
    this.nowval = '';
    this.nowqty = $('#itmqty_'+itm.id).html();
    if(this.nowqty == 1){
      $('#addcartbtn_'+itm.id).show();
    $('#qtycartbtn_'+itm.id).hide();
    }
    this.nowval = parseInt(this.nowqty)-1;
    $('#itmqty_'+itm.id).html(this.nowval);
    this.cart.minusqntyfrmprod(itm);
    this.totlaofcart();
  }
  addqty(itm){
    this.nowqty = '';
    this.nowval = '';
    this.nowqty = $('#itmqty_'+itm.id).html();
    this.nowval = parseInt(this.nowqty)+1;
    $('#itmqty_'+itm.id).html(this.nowval);
    this.cart.plusqnty(itm);
    this.totlaofcart();
  }


  async openDetailsItem(itm) {
    const modal = await this.modalController.create({
      component: ItemdetailsPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'item': itm,
     },
     backdropDismiss: true
    });
    return await modal.present();
  }
  
  viewmycart(){
    this.route.navigate(['/booknow']);
  }

  backmenu(){
    this.location.back();
  }
  openAlergyInfo(val){
    if(val.allergy_info){
      this.basic.alert('Allergy Info:', val.allergy_info);
    }
  }

}
