import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController, ModalController } from '@ionic/angular';
import { BasicApiService } from 'src/Providers/Basic/basic-api.service';
import { LocalApiService } from 'src/Providers/Local/local-api.service';
import { ApiService } from 'src/Providers/Services/api.service';
import { Location } from "@angular/common";
import { environment } from '../../environments/environment';
import { CartApiService } from 'src/Providers/Cart/cart-api.service';

@Component({
  selector: 'app-ourstylists',
  templateUrl: './ourstylists.page.html',
  styleUrls: ['./ourstylists.page.scss'],
})
export class OurstylistsPage implements OnInit {
  homepage: string;
  Servicesshow: boolean   = true;
  Offersshow: boolean     = false;
  Reviewshow: boolean     = false;
  imgpath: any;
  category_id: any;
  title: any;
  allProducts: any;
  postdata: any = {};
  mycart: any;
  carttotal: any;
  cartcount: any;
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
    public cart: CartApiService,
  ) { }

  ngOnInit() {
    this.homepage     = "Services";
    this.imgpath      = environment.imagepath;
  	this.category_id  = this.activatedRoute.snapshot.paramMap.get('category');
  	this.title        = this.activatedRoute.snapshot.paramMap.get('title');
  	this.getallProducts();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getallProducts();
      event.target.complete();
    }, 2000);
  }

  ionViewWillEnter(){
    this.mycart = this.cart.getcart();
    this.carttotal = this.cart.getTotalCart();
    this.cartcount = this.mycart.length;
  }

  getallProducts(){
    this.postdata.category_id = this.category_id;
    this.basic.presentLoading();
	  this.apiService.postdata('getcategory', this.postdata).subscribe((resp: any) => {
		this.allProducts = resp.data;
    console.log("this.allProducts",this.allProducts);
      setTimeout(()=>{
        this.basic.dismissloader();
      },1000)
    }, (err: any) => {
    return false;
    });
  }

  gonext(item){
  	if(item.issubcategory){
      this.route.navigate(['/subcategory/'+item.id+'/'+item.name]);
  	} else {
  		this.route.navigate(['/products/'+item.id+'/0/'+item.name]);
  	}
  }

  segmentChanged(val){
    if(val.detail.value == 'Services'){
      this.Servicesshow         = true; 
      this.Offersshow           = false;
      this.Reviewshow           = false;
    }
    else if(val.detail.value == 'Offers'){
      this.Offersshow           = true;
      this.Servicesshow         = false;
      this.Reviewshow           = false;
    }
    else{
      this.Reviewshow           = true;
      this.Servicesshow         = false; 
      this.Offersshow           = false;
    }
  }

  viewmycart(){
    this.route.navigate(['/booknow']);
  }

}
