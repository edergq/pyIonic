import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController, ModalController } from '@ionic/angular';
import { BasicApiService } from 'src/Providers/Basic/basic-api.service';
import { LocalApiService } from 'src/Providers/Local/local-api.service';
import { ApiService } from 'src/Providers/Services/api.service';
import { environment } from '../../environments/environment';
import { AppComponent } from '../app.component';
import { LoginpagePage } from '../loginpage/loginpage.page';
import { WritereviewPage } from '../writereview/writereview.page';

@Component({
  selector: 'app-reviewandrating',
  templateUrl: './reviewandrating.page.html',
  styleUrls: ['./reviewandrating.page.scss'],
})
export class ReviewandratingPage implements OnInit {

  imgpath: any;
  postdata: any = {};
  allProducts: any;
  logedUser: any;
  
  constructor(
  	public menuCtrl: MenuController,
    public apiService: ApiService,
    public basic: BasicApiService,
	  public localApi: LocalApiService,
    public route: Router,
    public alertController: AlertController,
    public modalController: ModalController,
    public apCmp: AppComponent
    ) { }

  ngOnInit() {
  	this.logedUser = this.localApi.getuser();
    this.imgpath = environment.imagepath;
    this.getallProducts();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      this.getallProducts();
      event.target.complete();
    }, 2000);
  }


  getallProducts(){
    this.basic.presentLoading();
	  this.apiService.postdata('getreviews', this.postdata).subscribe((resp: any) => {
		this.allProducts = resp.data;
  		console.log(this.allProducts);
      setTimeout(()=>{
        this.basic.dismissloader();
      },1000)
	}, (err: any) => {
	return false;
	});
  }

  checkmyord(){
  	this.basic.presentLoading();
  	this.logedUser = this.localApi.getuser();
	if(this.logedUser){
		this.apiService.postdata('myordnumber', this.logedUser.id).subscribe((resp: any) => {
			console.log(resp.data);
		    if(resp.data.order <= 0){
	  			this.basic.alert('Sorry:', 'You need to have at least 1 order to be able to submit a review.');
	  		} else if(resp.data.review > 0){
          this.openwrite('Update',resp.data.reviews);
        } else {
	  			this.openwrite('New','');
	  		}
			setTimeout(()=>{
				this.basic.dismissloader();
			},1000)
	    }, (err: any) => {
	    return false;
	    });
	}
  }


  createreviews(){
  	this.logedUser = this.localApi.getuser();
  	if(!this.logedUser){
  		this.openlogforofr();
  	} else {
  		this.checkmyord();
  	}
  }

  async openwrite(frwht, rvwdt) {
    const modal = await this.modalController.create({
      component: WritereviewPage,
      cssClass: 'my-custom-class',
      backdropDismiss: true,
      componentProps: {
        'review': rvwdt,
        'frwht': frwht,
     },
    });
    modal.onDidDismiss().then((data) => {
      console.log('data', data);
      if(data.data){
        this.ngOnInit();
      }
    });
    return await modal.present();
  }

  async openlogforofr() {
    const modal = await this.modalController.create({
      component: LoginpagePage,
      cssClass: 'my-custom-class',
      backdropDismiss: true
    });
    modal.onDidDismiss().then((data) => {
      console.log('data', data);
      if(data.data){
      	this.apCmp.checklogin();
        this.createreviews();
      }
    });
    return await modal.present();
  }
}
