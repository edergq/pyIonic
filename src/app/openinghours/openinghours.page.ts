import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { BasicApiService } from 'src/Providers/Basic/basic-api.service';
import { LocalApiService } from 'src/Providers/Local/local-api.service';
import { ApiService } from 'src/Providers/Services/api.service';
import { Location } from "@angular/common";
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-openinghours',
  templateUrl: './openinghours.page.html',
  styleUrls: ['./openinghours.page.scss'],
})
export class OpeninghoursPage implements OnInit {
  @Input() item: any;
  imgpath: any;
  getappsetng: any;
  isOpeningtime: any = false;
  opntimem: any;
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
    this.basic.presentLoading();
    this.apiService.getdata('getalldayopentime', '').subscribe((resp: any) => {
      this.opntimem = resp.data;
        setTimeout(()=>{
          this.basic.dismissloader();
          this.isOpeningtime = true;
        },1000)
    }, (err: any) => {
      return false;
    });
    this.imgpath      = environment.imagepath;
    
  }
}
