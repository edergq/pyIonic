import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController, ModalController } from '@ionic/angular';
import { BasicApiService } from 'src/Providers/Basic/basic-api.service';
import { CartApiService } from 'src/Providers/Cart/cart-api.service';
import { LocalApiService } from 'src/Providers/Local/local-api.service';
import { ApiService } from 'src/Providers/Services/api.service';
import { AppComponent } from '../app.component';
import { environment } from '../../environments/environment';
import { Location } from "@angular/common";
import { ProfileupdatePage } from '../profileupdate/profileupdate.page';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.page.html',
  styleUrls: ['./myaccount.page.scss'],
})
export class MyaccountPage implements OnInit {
  imgpath: any;
  pgtype: any;
  allProducts: any;
  seting: any = {};
  logeduser: any;
  ords: any;
  getappsetng: any;
  isMyacnt: any;
  title: any;
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
    public apCmp: AppComponent
  ) { }

  ngOnInit() {

    let getpage = this.activatedRoute.snapshot.paramMap.get('status');
    if (getpage == 'any') {
      this.title = 'My Acount';
      this.isMyacnt = 'YES';
    } else {
      this.title = 'Status';
      this.isMyacnt = '';
    }
    this.imgpath = environment.imagepath;
    this.logeduser = this.localApi.getuser();
    this.getappsetng = this.localApi.getappseting();
    this.getallProducts();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      this.getallProducts();
      event.target.complete();
    }, 2000);
  }

  // 
  getallProducts() {
    this.logeduser = this.localApi.getuser();
    this.basic.presentLoading();
    this.apiService.postdata('getmyorders', this.logeduser.id).subscribe((resp: any) => {
      console.log('orders', resp);
      this.ords = resp.data;
      setTimeout(() => {
        this.basic.dismissloader();
      }, 1000)

    }, (err: any) => {
      return false;
    });
  }

  logout() {
    this.localApi.removeUser();
    this.apCmp.checklogin();
    this.route.navigate(['/homepage']);
  }

  viewmycart() {
    this.route.navigate(['/mycart']);
  }

  viewordertls(val) {
    this.route.navigate(['/orderdetails/' + val + '/old']);
  }

  goaddress() {
    this.route.navigate(['/addressbook/viewedit']);
  }

  goreview() {
    this.route.navigate(['/reviewandrating']);
  }

  async opnprofileupdate() {
    const modal = await this.modalController.create({
      component: ProfileupdatePage,
      cssClass: 'my-custom-class',
      backdropDismiss: true
    });
    modal.onDidDismiss().then((data) => {
      console.log('data', data);
      if (data.data) {
        this.basic.alert('Success!', 'Your profile succesfully updated.');
        this.apCmp.checklogin();
        this.logeduser = this.localApi.getuser();
      }
    });
    return await modal.present();
  }

  ionViewWillLeave(){
    console.log("console");
    this.dismissmodal();
  }
  dismissmodal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
