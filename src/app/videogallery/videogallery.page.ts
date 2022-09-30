import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { MenuController, Platform } from '@ionic/angular';
import { BasicApiService } from 'src/Providers/Basic/basic-api.service';
import { ApiService } from 'src/Providers/Services/api.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-videogallery',
  templateUrl: './videogallery.page.html',
  styleUrls: ['./videogallery.page.scss'],
})
export class VideogalleryPage implements OnInit {
  imgpath: any;
  postdata: any = {};
  allProducts: any;
  pgtype: any;
  ipbroptions: any = {};
  brndane: any;
  link: string;
  constructor(
  	public menuCtrl: MenuController,
    public apiService: ApiService,
    public basic: BasicApiService,
    public route: Router,
    private activatedRoute: ActivatedRoute,
    private youtube: YoutubeVideoPlayer,
    private platform: Platform
  ) { }

  ngOnInit() {
  	this.pgtype     = this.activatedRoute.snapshot.paramMap.get('pgtype');
    this.imgpath    = environment.imagepath;
    this.getallProducts();
    this.brndane    = environment.appname;
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      this.getallProducts();
      event.target.complete();
    }, 2000);
  }

  getallProducts(){
  	this.postdata.pgtype    = this.pgtype;
    this.postdata.about     = 'OK';
    this.basic.presentLoading();
	  this.apiService.postdata('getallcms', this.postdata).subscribe((resp: any) => {
      this.allProducts = resp.data;
  		console.log('HELLO', this.allProducts);
      setTimeout(()=>{
        this.basic.dismissloader();
      },1000)
    }, (err: any) => {
      return false;
    });
  }

  helovid(val){
    this.link = 'https://img.youtube.com/vi/'+val+'/0.jpg'
    console.log("imagelink",this.link);
    console.log("this.link",val);
    this.platform.ready().then(() => {
      this.youtube.openVideo(val);
    })
    
  }
}
