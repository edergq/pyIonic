import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController, ModalController } from '@ionic/angular';
import { BasicApiService } from 'src/Providers/Basic/basic-api.service';
import { LocalApiService } from 'src/Providers/Local/local-api.service';
import { ApiService } from 'src/Providers/Services/api.service';
import { Location } from "@angular/common";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.page.html',
  styleUrls: ['./ourteam.page.scss'],
})
export class OurteamPage implements OnInit {
  imgpath: any;
  postdata: any = {};
  allProducts: any;
  pgtype: any;
  brndane: any;
  constructor(
  	public menuCtrl: MenuController,
    public apiService: ApiService,
    public basic: BasicApiService,
	  public localApi: LocalApiService,
    public route: Router,
    public alertController: AlertController,
    public location: Location,
    public modalController: ModalController,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  	this.pgtype       = this.activatedRoute.snapshot.paramMap.get('pgtype');
    this.imgpath      = environment.imagepath;
    this.getallProducts();
    this.brndane      = environment.appname;
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getallProducts();
      event.target.complete();
    }, 2000);
  }

  getallProducts(){
  	this.postdata.pgtype      = this.pgtype;
    this.postdata.about       = 'OK';
    this.basic.presentLoading();
	  this.apiService.postdata('getallcms', this.postdata).subscribe((resp: any) => {
      if(this.pgtype == 'Social Media'){
        this.allProducts      = resp.data[0];
      } else {
        this.allProducts      = resp.data;
      }
      setTimeout(()=>{
        this.basic.dismissloader();
      },1000)
    }, (err: any) => {
      return false;
    });
  }
}
