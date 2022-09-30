import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController, ModalController } from '@ionic/angular';
import { BasicApiService } from 'src/Providers/Basic/basic-api.service';
import { CartApiService } from 'src/Providers/Cart/cart-api.service';
import { LocalApiService } from 'src/Providers/Local/local-api.service';
import { ApiService } from 'src/Providers/Services/api.service';
import { environment } from '../../environments/environment';
import { Location } from "@angular/common";

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.page.html',
  styleUrls: ['./subcategory.page.scss'],
})
export class SubcategoryPage implements OnInit {
  imgpath: any;
  category_id: any;
  title: any;
  allProducts: any;
  postdata: any = {};
  cartcount: any;
  carttotal: any;
  mycart: any;
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
    this.imgpath            = environment.imagepath;
  	this.category_id        = this.activatedRoute.snapshot.paramMap.get('categoryid');
  	this.title              = this.activatedRoute.snapshot.paramMap.get('title');
  	this.getallProducts();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getallProducts();
      event.target.complete();
    }, 2000);
  }

  getallProducts(){
    this.postdata.category_id   = this.category_id;
    this.basic.presentLoading();
	  this.apiService.postdata('getsubcategory', this.postdata).subscribe((resp: any) => {
		this.allProducts            = resp.data;
    console.log("this.allProducts",this.allProducts);
      setTimeout(()=>{
        this.basic.dismissloader();
      },1000)
    }, (err: any) => {
      return false;
    });
  }

  gonext(item){
  	this.route.navigate(['/products/'+this.category_id+'/'+item.id+'/'+item.name]);
  }

  ionViewWillEnter(){
    this.mycart = this.cart.getcart();
    this.carttotal = this.cart.getTotalCart();
    this.cartcount = this.mycart.length;
  }

  viewmycart(){
    this.route.navigate(['/booknow']);
  }
}
