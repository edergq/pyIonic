/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable object-shorthand */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { BasicApiService } from 'src/Providers/Basic/basic-api.service';
import { CartApiService } from 'src/Providers/Cart/cart-api.service';
import { LocalApiService } from 'src/Providers/Local/local-api.service';
import { ApiService } from 'src/Providers/Services/api.service';
import { environment } from '../../environments/environment';
import { Location } from "@angular/common";
import { AppRate } from '@ionic-native/app-rate/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { OpeninghoursPage } from '../openinghours/openinghours.page';
import * as $ from 'jquery';
import { TouchID } from '@ionic-native/touch-id/ngx';
@Component({
  selector: 'app-listviews',
  templateUrl: './listviews.page.html',
  styleUrls: ['./listviews.page.scss'],
})
export class ListviewsPage implements OnInit {
  imgpath: any;
  pgtype: any;
  allProducts: any;
  seting: any = {};
  logedUser: any;
  isdeviceuser: any;
  isTouchidDevice: any = false;
  dataone: any = [];
  constructor(
    public apiService: ApiService,
    public basic: BasicApiService,
	  public localApi: LocalApiService,
	  public cart: CartApiService,
    public route: Router,
    public alertController: AlertController,
    public location: Location,
    public modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private socialSharing: SocialSharing,
    private platform: Platform,
    private appRate: AppRate,
    private touchId: TouchID,
    private iab: InAppBrowser
  ) { }

  ngOnInit() {
    this.isdeviceuser = this.localApi.getuserdevice();
    this.touchId.isAvailable().then(res => {
      if(this.isdeviceuser){
        this.isTouchidDevice = true;
      }
    },err => {
      console.error('TouchID is not available', err);
    });

    this.imgpath    = environment.imagepath;
  	this.pgtype     = this.activatedRoute.snapshot.paramMap.get('pgtype');
  	this.getallProducts();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getallProducts();
      event.target.complete();
    }, 2000);
  }

  getallProducts(){
    this.seting = this.localApi.getpushfaceset();
  	if(this.pgtype==='About Us'){
  		this.allProducts = [
	  		{
	  			name: 'About Us',
	  			url: '/aboutus/About Us'
	  		},
	  		{
	  			name: 'Our Team',
	  			url: '/ourteam/Our Team'
	  		},
	  		{
	  			name: 'Photo Gallery',
	  			url: '/imagegallerypage/Photo Gallery'
	  		},
	  		{
	  			name: 'Video Gallery',
	  			url: '/videogallery/Video Gallery'
	  		}
	  	];
  	}

  	if(this.pgtype==='Help and Info'){
      this.basic.presentLoading();
      this.apiService.getdata('getallcontent', '').subscribe((resp: any) => {
        for(let i = 0; i<resp.data.length; i++){
          console.log("i",resp.data[i].menu);

          this.dataone.push({
            name: resp.data[i].menu,
            url: '/aboutus/'+resp.data[i].menu
          });
        }

        this.allProducts = [
          {
            name: 'Opening Hours',
            url: 'openinghours'
          },
          {
            name: 'Contact Us',
            url: 'contactus'
          }
        ];
        this.allProducts = this.allProducts.concat(this.dataone);
        setTimeout(()=>{
          this.basic.dismissloader();
        },1000);
      }, (err: any) => {
        return false;
      });
  	}
  	if(this.pgtype==='Settings'){
  		this.allProducts = [
	  		{
	  			name: 'Share App',
	  			url: 'shareapp'
	  		},
	  		{
	  			name: 'Rate App',
	  			url: 'rateapp'
	  		}
	  	];
  	}
  }

  gonext(item){
  	if(item.url){
  		if(item.url==='shareapp'){
  			this.shareapp();
  		} else if(item.url==='rateapp'){
  			this.rateapp();
  		}
      else if(item.url === 'openinghours'){
        this.openinghours();
      }
      else {
  			this.route.navigate([item.url]);
  		}
  	}
  }

  rateapp(){
    this.appRate.preferences.storeAppURL = {
      ios: environment.iosappid,
      android: 'market://details?id='+environment.androidappid,
    };

    this.appRate.promptForRating(true);
  }

  shareapp(){
    if (this.platform.is('android')) {
      this.socialSharing.share(environment.app_share_text, null, null, environment.playstore);
    } else {
      console.log("socialSharing");
      this.socialSharing.share(environment.app_share_text, null, null, environment.appstore);
    }
  }

  seingcnge(val){
    this.logedUser = this.localApi.getuser();
    if(val==='touchface'){
      if(this.logedUser){
        this.seting.face = true;
      } else {
        this.openloginpanel();
        this.seting.face = false;
      }
      this.localApi.setpushfaceset(this.seting);
    } else {
      this.localApi.setpushfaceset(this.seting);
    }
  }

  async openinghours() {
    const modal = await this.modalController.create({
      component: OpeninghoursPage,
      cssClass: 'OpeninghoursPage',
      backdropDismiss: true,
    });
    return await modal.present();
  }

  async openloginpanel() {
  }

  viewmycart(){
    this.route.navigate(['/mycart']);
  }
}
