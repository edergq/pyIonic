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
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {
  imgpath: any;
  postdata: any = {};
  allProducts: any;
  pgtype: any;
  ipbroptions: any = {};
  isOpeningtime: any = false;
  pgtitle: any;
  opntimem: any;
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
  ) { }

  ngOnInit() {
    this.imgpath  = environment.imagepath;
  	this.pgtype   = this.activatedRoute.snapshot.paramMap.get('pgtype');
  	this.getallProducts();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getallProducts();
      event.target.complete();
    }, 2000);
  }

  getallProducts(){
  	this.postdata.pgtype    = this.pgtype;
    this.basic.presentLoading();
	  this.apiService.postdata('getallcms', this.postdata).subscribe((resp: any) => {
		this.allProducts        = resp.data;
      setTimeout(()=>{
        this.basic.dismissloader();
      },1000)
    }, (err: any) => {
      return false;
    });
  }
}
