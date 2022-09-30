import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { BasicApiService } from 'src/Providers/Basic/basic-api.service';
import { LocalApiService } from 'src/Providers/Local/local-api.service';
import { ApiService } from 'src/Providers/Services/api.service';
import { Location } from "@angular/common";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-offerdetails',
  templateUrl: './offerdetails.page.html',
  styleUrls: ['./offerdetails.page.scss'],
})
export class OfferdetailsPage implements OnInit {
  @Input() item: any;
  imgpath: any;
  getappsetng: any;
  
  constructor(
    public menuCtrl: MenuController,
    public apiService: ApiService,
    public basic: BasicApiService,
    public localApi: LocalApiService,
    public route: Router,
    public alertController: AlertController,
    public location: Location,
  ) { }

  ngOnInit() {
    console.log("item",this.item);
    this.getappsetng  = this.localApi.getappseting();
    this.imgpath      = environment.imagepath;
  }

}
