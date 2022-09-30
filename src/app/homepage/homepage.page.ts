import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, ModalController, NavController, Platform } from '@ionic/angular';
import { BasicApiService } from 'src/Providers/Basic/basic-api.service';
import { CartApiService } from 'src/Providers/Cart/cart-api.service';
import { LocalApiService } from 'src/Providers/Local/local-api.service';
import { ApiService } from 'src/Providers/Services/api.service';
import { Location } from "@angular/common";
import * as $ from 'jquery';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { environment } from '../../environments/environment';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ItemdetailsPage } from '../itemdetails/itemdetails.page';
import { LoginpagePage } from '../loginpage/loginpage.page';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
  homepage: string;
  Servicesshow: boolean   = true;
  Offersshow: boolean     = false;
  Reviewshow: boolean     = false;
  slideOpts = {
    initialSlide: 0,
    autoplay: true,
    loop: true,
    speed: 1000,
    effect: 'fade',
    spaceBetween: 10,
    slidesPerView: 1.1,
    slidesPerColumn: 1,
    pagination: false,
  };
  slideOptsmenu = {
    initialSlide: 0,
    autoplay: false,
    loop: false,
    speed: 20,
    effect: 'fade',
    spaceBetween: 10,
    slidesPerView: 2.5,
    pagination: false,
  };
	category: any;
	imgpath: any;
	mycart: any;
	cartcount: any;
	nowqty:any;
	nowval: any;
  carttotal: any;
  banners: any;
  postdata: any = {};
  getappsetng: any;
  isShopclose: any = false;
  closetxt: any;
  restrictns_lbl: any;
  restrictns_txt: any;
  isRestricktn: any = false;
  logeduser: any;
  nowapversion: string;
  ipbroptions: any = {};
  sesinlefct: any = false;

  respData:any={
    "success": true,
    "data": {
      "id": "2",
      "min_amount_delivery": null,
      "min_amount_checkout": "20.00",
      "tax_type": "Percentage",
      "tax_lebel": "Tax One",
      "tax_value": "10",
      "deposit_required": "YES",
      "deposit_amount": "15.00",
      "deposit_text": "Please note that the deposits are non-refundable in case of a  ",
      "additional_two_value": "0.00",
      "additional_three_lebel": null,
      "additional_three_value": "0.00",
      "delivery": "NO",
      "takeaway": "NO",
      "dine_in": "NO",
      "preparation_time": " Minutes",
      "collection_time": null,
      "restrictions_label": "",
      "restrictions_text": "",
      "first_order": "NO",
      "iosversion": "5.0",
      "androidversion": "5.0",
      "delivery_free": null,
      "festive_theme": "None",
      "pause_order": null,
      "distance_unit": null,
      "currency_code": "GBP",
      "currency_symbol": "Â£",
      "currency_id": "211",
      "pay_getaway": null,
      "time_zone": "Europe/London",
      "print_size": null,
      "pop_head": null,
      "pop_desc": null,
      "wallet": null,
      "cash_payment": "YES",
      "card_payment": "YES",
      "additional_one_value": "0.00",
      "opentime": {
        "toDayShop": "CLOSE",
        "openTimeToday": "Our opening hours are: <br>Breakfast: 09:00AM - 12:00PM<br>Lunch: 12:00PM - 05:00PM<br>Dinner: 05:00PM - 10:00PM",
        "openTimeTxt": "Opening Hours",
        "fullclose": ""
      },
      "appversion": "0.1.1",
      "appversionandroid": "0.1.1",
      "contact": {
        "id": "1",
        "mobile": "07500844944",
        "phone": " 07500844944",
        "email": "sales@v1technologies.com",
        "whatsapp": "07500844944",
        "website": "https://salon.v1tl.com/",
        "address": "123 Salon Address",
        "postcode": "ABC XYZ",
        "facebook": "https://www.facebook.com/V1technologies",
        "twitter": "https://twitter.com/V1Technologies",
        "instagram": "https://www.instagram.com/v1technologies/",
        "trustpilot": "https://uk.trustpilot.com/review/v1technologies.co.uk",
        "trip_advisor": "",
        "google_mybusiness": "https://g.page/v1technologiesuk?share",
        "pinterest": "https://in.pinterest.com/v1technologies/",
        "linkedln": "https://www.linkedin.com/company/2952494/admin/",
        "latitude": null,
        "longitude": null
      },
      "pause_order_message": "",
      "timeslot": [
        {
          "value": "01:00",
          "datename": "Today"
        },
        {
          "value": "01:05",
          "datename": "Today"
        },
        {
          "value": "01:10",
          "datename": "Today"
        },
        {
          "value": "01:15",
          "datename": "Today"
        },
        {
          "value": "01:20",
          "datename": "Today"
        },
        {
          "value": "01:25",
          "datename": "Today"
        },
        {
          "value": "01:30",
          "datename": "Today"
        },
        {
          "value": "01:35",
          "datename": "Today"
        },
        {
          "value": "01:40",
          "datename": "Today"
        },
        {
          "value": "01:45",
          "datename": "Today"
        },
        {
          "value": "01:50",
          "datename": "Today"
        },
        {
          "value": "01:55",
          "datename": "Today"
        },
        {
          "value": "02:00",
          "datename": "Today"
        },
        {
          "value": "02:05",
          "datename": "Today"
        },
        {
          "value": "02:10",
          "datename": "Today"
        },
        {
          "value": "02:15",
          "datename": "Today"
        },
        {
          "value": "02:20",
          "datename": "Today"
        },
        {
          "value": "02:25",
          "datename": "Today"
        },
        {
          "value": "02:30",
          "datename": "Today"
        },
        {
          "value": "02:35",
          "datename": "Today"
        },
        {
          "value": "02:40",
          "datename": "Today"
        },
        {
          "value": "02:45",
          "datename": "Today"
        },
        {
          "value": "02:50",
          "datename": "Today"
        },
        {
          "value": "02:55",
          "datename": "Today"
        },
        {
          "value": "03:00",
          "datename": "Today"
        },
        {
          "value": "03:05",
          "datename": "Today"
        },
        {
          "value": "03:10",
          "datename": "Today"
        },
        {
          "value": "03:15",
          "datename": "Today"
        },
        {
          "value": "03:20",
          "datename": "Today"
        },
        {
          "value": "03:25",
          "datename": "Today"
        },
        {
          "value": "03:30",
          "datename": "Today"
        },
        {
          "value": "03:35",
          "datename": "Today"
        },
        {
          "value": "03:40",
          "datename": "Today"
        },
        {
          "value": "03:45",
          "datename": "Today"
        },
        {
          "value": "03:50",
          "datename": "Today"
        },
        {
          "value": "03:55",
          "datename": "Today"
        },
        {
          "value": "04:00",
          "datename": "Today"
        },
        {
          "value": "04:05",
          "datename": "Today"
        },
        {
          "value": "04:10",
          "datename": "Today"
        },
        {
          "value": "04:15",
          "datename": "Today"
        },
        {
          "value": "04:20",
          "datename": "Today"
        },
        {
          "value": "04:25",
          "datename": "Today"
        },
        {
          "value": "04:30",
          "datename": "Today"
        },
        {
          "value": "04:35",
          "datename": "Today"
        },
        {
          "value": "04:40",
          "datename": "Today"
        },
        {
          "value": "04:45",
          "datename": "Today"
        },
        {
          "value": "04:50",
          "datename": "Today"
        },
        {
          "value": "04:55",
          "datename": "Today"
        },
        {
          "value": "05:00",
          "datename": "Today"
        },
        {
          "value": "05:05",
          "datename": "Today"
        },
        {
          "value": "05:10",
          "datename": "Today"
        },
        {
          "value": "05:15",
          "datename": "Today"
        },
        {
          "value": "05:20",
          "datename": "Today"
        },
        {
          "value": "05:25",
          "datename": "Today"
        },
        {
          "value": "05:30",
          "datename": "Today"
        },
        {
          "value": "05:35",
          "datename": "Today"
        },
        {
          "value": "05:40",
          "datename": "Today"
        },
        {
          "value": "05:45",
          "datename": "Today"
        },
        {
          "value": "05:50",
          "datename": "Today"
        },
        {
          "value": "05:55",
          "datename": "Today"
        },
        {
          "value": "06:00",
          "datename": "Today"
        },
        {
          "value": "06:05",
          "datename": "Today"
        },
        {
          "value": "06:10",
          "datename": "Today"
        },
        {
          "value": "06:15",
          "datename": "Today"
        },
        {
          "value": "06:20",
          "datename": "Today"
        },
        {
          "value": "06:25",
          "datename": "Today"
        },
        {
          "value": "06:30",
          "datename": "Today"
        },
        {
          "value": "06:35",
          "datename": "Today"
        },
        {
          "value": "06:40",
          "datename": "Today"
        },
        {
          "value": "06:45",
          "datename": "Today"
        },
        {
          "value": "06:50",
          "datename": "Today"
        },
        {
          "value": "06:55",
          "datename": "Today"
        },
        {
          "value": "07:00",
          "datename": "Today"
        },
        {
          "value": "07:05",
          "datename": "Today"
        },
        {
          "value": "07:10",
          "datename": "Today"
        },
        {
          "value": "07:15",
          "datename": "Today"
        },
        {
          "value": "07:20",
          "datename": "Today"
        },
        {
          "value": "07:25",
          "datename": "Today"
        },
        {
          "value": "07:30",
          "datename": "Today"
        },
        {
          "value": "07:35",
          "datename": "Today"
        },
        {
          "value": "07:40",
          "datename": "Today"
        },
        {
          "value": "07:45",
          "datename": "Today"
        },
        {
          "value": "07:50",
          "datename": "Today"
        },
        {
          "value": "07:55",
          "datename": "Today"
        },
        {
          "value": "08:00",
          "datename": "Today"
        },
        {
          "value": "08:05",
          "datename": "Today"
        },
        {
          "value": "08:10",
          "datename": "Today"
        },
        {
          "value": "08:15",
          "datename": "Today"
        },
        {
          "value": "08:20",
          "datename": "Today"
        },
        {
          "value": "08:25",
          "datename": "Today"
        },
        {
          "value": "08:30",
          "datename": "Today"
        },
        {
          "value": "08:35",
          "datename": "Today"
        },
        {
          "value": "08:40",
          "datename": "Today"
        },
        {
          "value": "08:45",
          "datename": "Today"
        },
        {
          "value": "08:50",
          "datename": "Today"
        },
        {
          "value": "08:55",
          "datename": "Today"
        },
        {
          "value": "09:00",
          "datename": "Today"
        },
        {
          "value": "09:05",
          "datename": "Today"
        },
        {
          "value": "09:10",
          "datename": "Today"
        },
        {
          "value": "09:15",
          "datename": "Today"
        },
        {
          "value": "09:20",
          "datename": "Today"
        },
        {
          "value": "09:25",
          "datename": "Today"
        },
        {
          "value": "09:30",
          "datename": "Today"
        },
        {
          "value": "09:35",
          "datename": "Today"
        },
        {
          "value": "09:40",
          "datename": "Today"
        },
        {
          "value": "09:45",
          "datename": "Today"
        },
        {
          "value": "09:50",
          "datename": "Today"
        },
        {
          "value": "09:55",
          "datename": "Today"
        },
        {
          "value": "10:00",
          "datename": "Today"
        },
        {
          "value": "10:05",
          "datename": "Today"
        },
        {
          "value": "10:10",
          "datename": "Today"
        },
        {
          "value": "10:15",
          "datename": "Today"
        },
        {
          "value": "10:20",
          "datename": "Today"
        },
        {
          "value": "10:25",
          "datename": "Today"
        },
        {
          "value": "10:30",
          "datename": "Today"
        },
        {
          "value": "10:35",
          "datename": "Today"
        },
        {
          "value": "10:40",
          "datename": "Today"
        },
        {
          "value": "10:45",
          "datename": "Today"
        },
        {
          "value": "10:50",
          "datename": "Today"
        },
        {
          "value": "10:55",
          "datename": "Today"
        },
        {
          "value": "11:00",
          "datename": "Today"
        },
        {
          "value": "11:05",
          "datename": "Today"
        },
        {
          "value": "11:10",
          "datename": "Today"
        },
        {
          "value": "11:15",
          "datename": "Today"
        },
        {
          "value": "11:20",
          "datename": "Today"
        },
        {
          "value": "11:25",
          "datename": "Today"
        },
        {
          "value": "11:30",
          "datename": "Today"
        },
        {
          "value": "11:35",
          "datename": "Today"
        },
        {
          "value": "11:40",
          "datename": "Today"
        },
        {
          "value": "11:45",
          "datename": "Today"
        },
        {
          "value": "11:50",
          "datename": "Today"
        },
        {
          "value": "11:55",
          "datename": "Today"
        },
        {
          "value": "12:00",
          "datename": "Today"
        },
        {
          "value": "01:00",
          "datename": "Today"
        },
        {
          "value": "01:05",
          "datename": "Today"
        },
        {
          "value": "01:10",
          "datename": "Today"
        },
        {
          "value": "01:15",
          "datename": "Today"
        },
        {
          "value": "01:20",
          "datename": "Today"
        },
        {
          "value": "01:25",
          "datename": "Today"
        },
        {
          "value": "01:30",
          "datename": "Today"
        },
        {
          "value": "01:35",
          "datename": "Today"
        },
        {
          "value": "01:40",
          "datename": "Today"
        },
        {
          "value": "01:45",
          "datename": "Today"
        },
        {
          "value": "01:50",
          "datename": "Today"
        },
        {
          "value": "01:55",
          "datename": "Today"
        },
        {
          "value": "02:00",
          "datename": "Today"
        },
        {
          "value": "02:05",
          "datename": "Today"
        },
        {
          "value": "02:10",
          "datename": "Today"
        },
        {
          "value": "02:15",
          "datename": "Today"
        },
        {
          "value": "02:20",
          "datename": "Today"
        },
        {
          "value": "02:25",
          "datename": "Today"
        },
        {
          "value": "02:30",
          "datename": "Today"
        },
        {
          "value": "02:35",
          "datename": "Today"
        },
        {
          "value": "02:40",
          "datename": "Today"
        },
        {
          "value": "02:45",
          "datename": "Today"
        },
        {
          "value": "02:50",
          "datename": "Today"
        },
        {
          "value": "02:55",
          "datename": "Today"
        },
        {
          "value": "03:00",
          "datename": "Today"
        },
        {
          "value": "03:05",
          "datename": "Today"
        },
        {
          "value": "03:10",
          "datename": "Today"
        },
        {
          "value": "03:15",
          "datename": "Today"
        },
        {
          "value": "03:20",
          "datename": "Today"
        },
        {
          "value": "03:25",
          "datename": "Today"
        },
        {
          "value": "03:30",
          "datename": "Today"
        },
        {
          "value": "03:35",
          "datename": "Today"
        },
        {
          "value": "03:40",
          "datename": "Today"
        },
        {
          "value": "03:45",
          "datename": "Today"
        },
        {
          "value": "03:50",
          "datename": "Today"
        },
        {
          "value": "03:55",
          "datename": "Today"
        },
        {
          "value": "04:00",
          "datename": "Today"
        },
        {
          "value": "04:05",
          "datename": "Today"
        },
        {
          "value": "04:10",
          "datename": "Today"
        },
        {
          "value": "04:15",
          "datename": "Today"
        },
        {
          "value": "04:20",
          "datename": "Today"
        },
        {
          "value": "04:25",
          "datename": "Today"
        },
        {
          "value": "04:30",
          "datename": "Today"
        },
        {
          "value": "04:35",
          "datename": "Today"
        },
        {
          "value": "04:40",
          "datename": "Today"
        },
        {
          "value": "04:45",
          "datename": "Today"
        },
        {
          "value": "04:50",
          "datename": "Today"
        },
        {
          "value": "04:55",
          "datename": "Today"
        },
        {
          "value": "05:00",
          "datename": "Today"
        },
        {
          "value": "05:05",
          "datename": "Today"
        },
        {
          "value": "05:10",
          "datename": "Today"
        },
        {
          "value": "05:15",
          "datename": "Today"
        },
        {
          "value": "05:20",
          "datename": "Today"
        },
        {
          "value": "05:25",
          "datename": "Today"
        },
        {
          "value": "05:30",
          "datename": "Today"
        },
        {
          "value": "05:35",
          "datename": "Today"
        },
        {
          "value": "05:40",
          "datename": "Today"
        },
        {
          "value": "05:45",
          "datename": "Today"
        },
        {
          "value": "05:50",
          "datename": "Today"
        },
        {
          "value": "05:55",
          "datename": "Today"
        },
        {
          "value": "06:00",
          "datename": "Today"
        },
        {
          "value": "06:05",
          "datename": "Today"
        },
        {
          "value": "06:10",
          "datename": "Today"
        },
        {
          "value": "06:15",
          "datename": "Today"
        },
        {
          "value": "06:20",
          "datename": "Today"
        },
        {
          "value": "06:25",
          "datename": "Today"
        },
        {
          "value": "06:30",
          "datename": "Today"
        },
        {
          "value": "06:35",
          "datename": "Today"
        },
        {
          "value": "06:40",
          "datename": "Today"
        },
        {
          "value": "06:45",
          "datename": "Today"
        },
        {
          "value": "06:50",
          "datename": "Today"
        },
        {
          "value": "06:55",
          "datename": "Today"
        },
        {
          "value": "07:00",
          "datename": "Today"
        },
        {
          "value": "07:05",
          "datename": "Today"
        },
        {
          "value": "07:10",
          "datename": "Today"
        },
        {
          "value": "07:15",
          "datename": "Today"
        },
        {
          "value": "07:20",
          "datename": "Today"
        },
        {
          "value": "07:25",
          "datename": "Today"
        },
        {
          "value": "07:30",
          "datename": "Today"
        },
        {
          "value": "07:35",
          "datename": "Today"
        },
        {
          "value": "07:40",
          "datename": "Today"
        },
        {
          "value": "07:45",
          "datename": "Today"
        },
        {
          "value": "07:50",
          "datename": "Today"
        },
        {
          "value": "07:55",
          "datename": "Today"
        },
        {
          "value": "08:00",
          "datename": "Today"
        },
        {
          "value": "08:05",
          "datename": "Today"
        },
        {
          "value": "08:10",
          "datename": "Today"
        },
        {
          "value": "08:15",
          "datename": "Today"
        },
        {
          "value": "08:20",
          "datename": "Today"
        },
        {
          "value": "08:25",
          "datename": "Today"
        },
        {
          "value": "08:30",
          "datename": "Today"
        },
        {
          "value": "08:35",
          "datename": "Today"
        },
        {
          "value": "08:40",
          "datename": "Today"
        },
        {
          "value": "08:45",
          "datename": "Today"
        },
        {
          "value": "08:50",
          "datename": "Today"
        },
        {
          "value": "08:55",
          "datename": "Today"
        },
        {
          "value": "09:00",
          "datename": "Today"
        },
        {
          "value": "09:05",
          "datename": "Today"
        },
        {
          "value": "09:10",
          "datename": "Today"
        },
        {
          "value": "09:15",
          "datename": "Today"
        },
        {
          "value": "09:20",
          "datename": "Today"
        },
        {
          "value": "09:25",
          "datename": "Today"
        },
        {
          "value": "09:30",
          "datename": "Today"
        },
        {
          "value": "09:35",
          "datename": "Today"
        },
        {
          "value": "09:40",
          "datename": "Today"
        },
        {
          "value": "09:45",
          "datename": "Today"
        },
        {
          "value": "09:50",
          "datename": "Today"
        },
        {
          "value": "09:55",
          "datename": "Today"
        },
        {
          "value": "10:00",
          "datename": "Today"
        },
        {
          "value": "10:05",
          "datename": "Today"
        },
        {
          "value": "10:10",
          "datename": "Today"
        },
        {
          "value": "10:15",
          "datename": "Today"
        },
        {
          "value": "10:20",
          "datename": "Today"
        },
        {
          "value": "10:25",
          "datename": "Today"
        },
        {
          "value": "10:30",
          "datename": "Today"
        },
        {
          "value": "10:35",
          "datename": "Today"
        },
        {
          "value": "10:40",
          "datename": "Today"
        },
        {
          "value": "10:45",
          "datename": "Today"
        },
        {
          "value": "10:50",
          "datename": "Today"
        },
        {
          "value": "10:55",
          "datename": "Today"
        },
        {
          "value": "11:00",
          "datename": "Today"
        },
        {
          "value": "11:05",
          "datename": "Today"
        },
        {
          "value": "11:10",
          "datename": "Today"
        },
        {
          "value": "11:15",
          "datename": "Today"
        },
        {
          "value": "11:20",
          "datename": "Today"
        },
        {
          "value": "11:25",
          "datename": "Today"
        },
        {
          "value": "11:30",
          "datename": "Today"
        },
        {
          "value": "11:35",
          "datename": "Today"
        },
        {
          "value": "11:40",
          "datename": "Today"
        },
        {
          "value": "11:45",
          "datename": "Today"
        },
        {
          "value": "11:50",
          "datename": "Today"
        },
        {
          "value": "11:55",
          "datename": "Today"
        },
        {
          "value": "12:00",
          "datename": "Today"
        },
        {
          "value": "12:05",
          "datename": "Today"
        },
        {
          "value": "12:10",
          "datename": "Today"
        },
        {
          "value": "12:15",
          "datename": "Today"
        },
        {
          "value": "12:20",
          "datename": "Today"
        },
        {
          "value": "12:25",
          "datename": "Today"
        },
        {
          "value": "12:30",
          "datename": "Today"
        },
        {
          "value": "12:35",
          "datename": "Today"
        },
        {
          "value": "12:40",
          "datename": "Today"
        },
        {
          "value": "12:45",
          "datename": "Today"
        },
        {
          "value": "12:50",
          "datename": "Today"
        },
        {
          "value": "12:55",
          "datename": "Today"
        },
        {
          "value": "13:00",
          "datename": "Today"
        },
        {
          "value": "13:05",
          "datename": "Today"
        },
        {
          "value": "13:10",
          "datename": "Today"
        },
        {
          "value": "13:15",
          "datename": "Today"
        },
        {
          "value": "13:20",
          "datename": "Today"
        },
        {
          "value": "13:25",
          "datename": "Today"
        },
        {
          "value": "13:30",
          "datename": "Today"
        },
        {
          "value": "13:35",
          "datename": "Today"
        },
        {
          "value": "13:40",
          "datename": "Today"
        },
        {
          "value": "13:45",
          "datename": "Today"
        },
        {
          "value": "13:50",
          "datename": "Today"
        },
        {
          "value": "13:55",
          "datename": "Today"
        },
        {
          "value": "14:00",
          "datename": "Today"
        },
        {
          "value": "14:05",
          "datename": "Today"
        },
        {
          "value": "14:10",
          "datename": "Today"
        },
        {
          "value": "14:15",
          "datename": "Today"
        },
        {
          "value": "14:20",
          "datename": "Today"
        },
        {
          "value": "14:25",
          "datename": "Today"
        },
        {
          "value": "14:30",
          "datename": "Today"
        },
        {
          "value": "14:35",
          "datename": "Today"
        },
        {
          "value": "14:40",
          "datename": "Today"
        },
        {
          "value": "14:45",
          "datename": "Today"
        },
        {
          "value": "14:50",
          "datename": "Today"
        },
        {
          "value": "14:55",
          "datename": "Today"
        },
        {
          "value": "15:00",
          "datename": "Today"
        },
        {
          "value": "15:05",
          "datename": "Today"
        },
        {
          "value": "15:10",
          "datename": "Today"
        },
        {
          "value": "15:15",
          "datename": "Today"
        },
        {
          "value": "15:20",
          "datename": "Today"
        },
        {
          "value": "15:25",
          "datename": "Today"
        },
        {
          "value": "15:30",
          "datename": "Today"
        },
        {
          "value": "15:35",
          "datename": "Today"
        },
        {
          "value": "15:40",
          "datename": "Today"
        },
        {
          "value": "15:45",
          "datename": "Today"
        },
        {
          "value": "15:50",
          "datename": "Today"
        },
        {
          "value": "15:55",
          "datename": "Today"
        },
        {
          "value": "16:00",
          "datename": "Today"
        },
        {
          "value": "16:05",
          "datename": "Today"
        },
        {
          "value": "16:10",
          "datename": "Today"
        },
        {
          "value": "16:15",
          "datename": "Today"
        },
        {
          "value": "16:20",
          "datename": "Today"
        },
        {
          "value": "16:25",
          "datename": "Today"
        },
        {
          "value": "16:30",
          "datename": "Today"
        },
        {
          "value": "16:35",
          "datename": "Today"
        },
        {
          "value": "16:40",
          "datename": "Today"
        },
        {
          "value": "16:45",
          "datename": "Today"
        },
        {
          "value": "16:50",
          "datename": "Today"
        },
        {
          "value": "16:55",
          "datename": "Today"
        },
        {
          "value": "17:00",
          "datename": "Today"
        },
        {
          "value": "01:00",
          "datename": "Today"
        },
        {
          "value": "01:05",
          "datename": "Today"
        },
        {
          "value": "01:10",
          "datename": "Today"
        },
        {
          "value": "01:15",
          "datename": "Today"
        },
        {
          "value": "01:20",
          "datename": "Today"
        },
        {
          "value": "01:25",
          "datename": "Today"
        },
        {
          "value": "01:30",
          "datename": "Today"
        },
        {
          "value": "01:35",
          "datename": "Today"
        },
        {
          "value": "01:40",
          "datename": "Today"
        },
        {
          "value": "01:45",
          "datename": "Today"
        },
        {
          "value": "01:50",
          "datename": "Today"
        },
        {
          "value": "01:55",
          "datename": "Today"
        },
        {
          "value": "02:00",
          "datename": "Today"
        },
        {
          "value": "02:05",
          "datename": "Today"
        },
        {
          "value": "02:10",
          "datename": "Today"
        },
        {
          "value": "02:15",
          "datename": "Today"
        },
        {
          "value": "02:20",
          "datename": "Today"
        },
        {
          "value": "02:25",
          "datename": "Today"
        },
        {
          "value": "02:30",
          "datename": "Today"
        },
        {
          "value": "02:35",
          "datename": "Today"
        },
        {
          "value": "02:40",
          "datename": "Today"
        },
        {
          "value": "02:45",
          "datename": "Today"
        },
        {
          "value": "02:50",
          "datename": "Today"
        },
        {
          "value": "02:55",
          "datename": "Today"
        },
        {
          "value": "03:00",
          "datename": "Today"
        },
        {
          "value": "03:05",
          "datename": "Today"
        },
        {
          "value": "03:10",
          "datename": "Today"
        },
        {
          "value": "03:15",
          "datename": "Today"
        },
        {
          "value": "03:20",
          "datename": "Today"
        },
        {
          "value": "03:25",
          "datename": "Today"
        },
        {
          "value": "03:30",
          "datename": "Today"
        },
        {
          "value": "03:35",
          "datename": "Today"
        },
        {
          "value": "03:40",
          "datename": "Today"
        },
        {
          "value": "03:45",
          "datename": "Today"
        },
        {
          "value": "03:50",
          "datename": "Today"
        },
        {
          "value": "03:55",
          "datename": "Today"
        },
        {
          "value": "04:00",
          "datename": "Today"
        },
        {
          "value": "04:05",
          "datename": "Today"
        },
        {
          "value": "04:10",
          "datename": "Today"
        },
        {
          "value": "04:15",
          "datename": "Today"
        },
        {
          "value": "04:20",
          "datename": "Today"
        },
        {
          "value": "04:25",
          "datename": "Today"
        },
        {
          "value": "04:30",
          "datename": "Today"
        },
        {
          "value": "04:35",
          "datename": "Today"
        },
        {
          "value": "04:40",
          "datename": "Today"
        },
        {
          "value": "04:45",
          "datename": "Today"
        },
        {
          "value": "04:50",
          "datename": "Today"
        },
        {
          "value": "04:55",
          "datename": "Today"
        },
        {
          "value": "05:00",
          "datename": "Today"
        },
        {
          "value": "05:05",
          "datename": "Today"
        },
        {
          "value": "05:10",
          "datename": "Today"
        },
        {
          "value": "05:15",
          "datename": "Today"
        },
        {
          "value": "05:20",
          "datename": "Today"
        },
        {
          "value": "05:25",
          "datename": "Today"
        },
        {
          "value": "05:30",
          "datename": "Today"
        },
        {
          "value": "05:35",
          "datename": "Today"
        },
        {
          "value": "05:40",
          "datename": "Today"
        },
        {
          "value": "05:45",
          "datename": "Today"
        },
        {
          "value": "05:50",
          "datename": "Today"
        },
        {
          "value": "05:55",
          "datename": "Today"
        },
        {
          "value": "06:00",
          "datename": "Today"
        },
        {
          "value": "06:05",
          "datename": "Today"
        },
        {
          "value": "06:10",
          "datename": "Today"
        },
        {
          "value": "06:15",
          "datename": "Today"
        },
        {
          "value": "06:20",
          "datename": "Today"
        },
        {
          "value": "06:25",
          "datename": "Today"
        },
        {
          "value": "06:30",
          "datename": "Today"
        },
        {
          "value": "06:35",
          "datename": "Today"
        },
        {
          "value": "06:40",
          "datename": "Today"
        },
        {
          "value": "06:45",
          "datename": "Today"
        },
        {
          "value": "06:50",
          "datename": "Today"
        },
        {
          "value": "06:55",
          "datename": "Today"
        },
        {
          "value": "07:00",
          "datename": "Today"
        },
        {
          "value": "07:05",
          "datename": "Today"
        },
        {
          "value": "07:10",
          "datename": "Today"
        },
        {
          "value": "07:15",
          "datename": "Today"
        },
        {
          "value": "07:20",
          "datename": "Today"
        },
        {
          "value": "07:25",
          "datename": "Today"
        },
        {
          "value": "07:30",
          "datename": "Today"
        },
        {
          "value": "07:35",
          "datename": "Today"
        },
        {
          "value": "07:40",
          "datename": "Today"
        },
        {
          "value": "07:45",
          "datename": "Today"
        },
        {
          "value": "07:50",
          "datename": "Today"
        },
        {
          "value": "07:55",
          "datename": "Today"
        },
        {
          "value": "08:00",
          "datename": "Today"
        },
        {
          "value": "08:05",
          "datename": "Today"
        },
        {
          "value": "08:10",
          "datename": "Today"
        },
        {
          "value": "08:15",
          "datename": "Today"
        },
        {
          "value": "08:20",
          "datename": "Today"
        },
        {
          "value": "08:25",
          "datename": "Today"
        },
        {
          "value": "08:30",
          "datename": "Today"
        },
        {
          "value": "08:35",
          "datename": "Today"
        },
        {
          "value": "08:40",
          "datename": "Today"
        },
        {
          "value": "08:45",
          "datename": "Today"
        },
        {
          "value": "08:50",
          "datename": "Today"
        },
        {
          "value": "08:55",
          "datename": "Today"
        },
        {
          "value": "09:00",
          "datename": "Today"
        },
        {
          "value": "09:05",
          "datename": "Today"
        },
        {
          "value": "09:10",
          "datename": "Today"
        },
        {
          "value": "09:15",
          "datename": "Today"
        },
        {
          "value": "09:20",
          "datename": "Today"
        },
        {
          "value": "09:25",
          "datename": "Today"
        },
        {
          "value": "09:30",
          "datename": "Today"
        },
        {
          "value": "09:35",
          "datename": "Today"
        },
        {
          "value": "09:40",
          "datename": "Today"
        },
        {
          "value": "09:45",
          "datename": "Today"
        },
        {
          "value": "09:50",
          "datename": "Today"
        },
        {
          "value": "09:55",
          "datename": "Today"
        },
        {
          "value": "10:00",
          "datename": "Today"
        },
        {
          "value": "10:05",
          "datename": "Today"
        },
        {
          "value": "10:10",
          "datename": "Today"
        },
        {
          "value": "10:15",
          "datename": "Today"
        },
        {
          "value": "10:20",
          "datename": "Today"
        },
        {
          "value": "10:25",
          "datename": "Today"
        },
        {
          "value": "10:30",
          "datename": "Today"
        },
        {
          "value": "10:35",
          "datename": "Today"
        },
        {
          "value": "10:40",
          "datename": "Today"
        },
        {
          "value": "10:45",
          "datename": "Today"
        },
        {
          "value": "10:50",
          "datename": "Today"
        },
        {
          "value": "10:55",
          "datename": "Today"
        },
        {
          "value": "11:00",
          "datename": "Today"
        },
        {
          "value": "11:05",
          "datename": "Today"
        },
        {
          "value": "11:10",
          "datename": "Today"
        },
        {
          "value": "11:15",
          "datename": "Today"
        },
        {
          "value": "11:20",
          "datename": "Today"
        },
        {
          "value": "11:25",
          "datename": "Today"
        },
        {
          "value": "11:30",
          "datename": "Today"
        },
        {
          "value": "11:35",
          "datename": "Today"
        },
        {
          "value": "11:40",
          "datename": "Today"
        },
        {
          "value": "11:45",
          "datename": "Today"
        },
        {
          "value": "11:50",
          "datename": "Today"
        },
        {
          "value": "11:55",
          "datename": "Today"
        },
        {
          "value": "12:00",
          "datename": "Today"
        },
        {
          "value": "12:05",
          "datename": "Today"
        },
        {
          "value": "12:10",
          "datename": "Today"
        },
        {
          "value": "12:15",
          "datename": "Today"
        },
        {
          "value": "12:20",
          "datename": "Today"
        },
        {
          "value": "12:25",
          "datename": "Today"
        },
        {
          "value": "12:30",
          "datename": "Today"
        },
        {
          "value": "12:35",
          "datename": "Today"
        },
        {
          "value": "12:40",
          "datename": "Today"
        },
        {
          "value": "12:45",
          "datename": "Today"
        },
        {
          "value": "12:50",
          "datename": "Today"
        },
        {
          "value": "12:55",
          "datename": "Today"
        },
        {
          "value": "13:00",
          "datename": "Today"
        },
        {
          "value": "13:05",
          "datename": "Today"
        },
        {
          "value": "13:10",
          "datename": "Today"
        },
        {
          "value": "13:15",
          "datename": "Today"
        },
        {
          "value": "13:20",
          "datename": "Today"
        },
        {
          "value": "13:25",
          "datename": "Today"
        },
        {
          "value": "13:30",
          "datename": "Today"
        },
        {
          "value": "13:35",
          "datename": "Today"
        },
        {
          "value": "13:40",
          "datename": "Today"
        },
        {
          "value": "13:45",
          "datename": "Today"
        },
        {
          "value": "13:50",
          "datename": "Today"
        },
        {
          "value": "13:55",
          "datename": "Today"
        },
        {
          "value": "14:00",
          "datename": "Today"
        },
        {
          "value": "14:05",
          "datename": "Today"
        },
        {
          "value": "14:10",
          "datename": "Today"
        },
        {
          "value": "14:15",
          "datename": "Today"
        },
        {
          "value": "14:20",
          "datename": "Today"
        },
        {
          "value": "14:25",
          "datename": "Today"
        },
        {
          "value": "14:30",
          "datename": "Today"
        },
        {
          "value": "14:35",
          "datename": "Today"
        },
        {
          "value": "14:40",
          "datename": "Today"
        },
        {
          "value": "14:45",
          "datename": "Today"
        },
        {
          "value": "14:50",
          "datename": "Today"
        },
        {
          "value": "14:55",
          "datename": "Today"
        },
        {
          "value": "15:00",
          "datename": "Today"
        },
        {
          "value": "15:05",
          "datename": "Today"
        },
        {
          "value": "15:10",
          "datename": "Today"
        },
        {
          "value": "15:15",
          "datename": "Today"
        },
        {
          "value": "15:20",
          "datename": "Today"
        },
        {
          "value": "15:25",
          "datename": "Today"
        },
        {
          "value": "15:30",
          "datename": "Today"
        },
        {
          "value": "15:35",
          "datename": "Today"
        },
        {
          "value": "15:40",
          "datename": "Today"
        },
        {
          "value": "15:45",
          "datename": "Today"
        },
        {
          "value": "15:50",
          "datename": "Today"
        },
        {
          "value": "15:55",
          "datename": "Today"
        },
        {
          "value": "16:00",
          "datename": "Today"
        },
        {
          "value": "16:05",
          "datename": "Today"
        },
        {
          "value": "16:10",
          "datename": "Today"
        },
        {
          "value": "16:15",
          "datename": "Today"
        },
        {
          "value": "16:20",
          "datename": "Today"
        },
        {
          "value": "16:25",
          "datename": "Today"
        },
        {
          "value": "16:30",
          "datename": "Today"
        },
        {
          "value": "16:35",
          "datename": "Today"
        },
        {
          "value": "16:40",
          "datename": "Today"
        },
        {
          "value": "16:45",
          "datename": "Today"
        },
        {
          "value": "16:50",
          "datename": "Today"
        },
        {
          "value": "16:55",
          "datename": "Today"
        },
        {
          "value": "17:00",
          "datename": "Today"
        },
        {
          "value": "17:05",
          "datename": "Today"
        },
        {
          "value": "17:10",
          "datename": "Today"
        },
        {
          "value": "17:15",
          "datename": "Today"
        },
        {
          "value": "17:20",
          "datename": "Today"
        },
        {
          "value": "17:25",
          "datename": "Today"
        },
        {
          "value": "17:30",
          "datename": "Today"
        },
        {
          "value": "17:35",
          "datename": "Today"
        },
        {
          "value": "17:40",
          "datename": "Today"
        },
        {
          "value": "17:45",
          "datename": "Today"
        },
        {
          "value": "17:50",
          "datename": "Today"
        },
        {
          "value": "17:55",
          "datename": "Today"
        },
        {
          "value": "18:00",
          "datename": "Today"
        },
        {
          "value": "18:05",
          "datename": "Today"
        },
        {
          "value": "18:10",
          "datename": "Today"
        },
        {
          "value": "18:15",
          "datename": "Today"
        },
        {
          "value": "18:20",
          "datename": "Today"
        },
        {
          "value": "18:25",
          "datename": "Today"
        },
        {
          "value": "18:30",
          "datename": "Today"
        },
        {
          "value": "18:35",
          "datename": "Today"
        },
        {
          "value": "18:40",
          "datename": "Today"
        },
        {
          "value": "18:45",
          "datename": "Today"
        },
        {
          "value": "18:50",
          "datename": "Today"
        },
        {
          "value": "18:55",
          "datename": "Today"
        },
        {
          "value": "19:00",
          "datename": "Today"
        },
        {
          "value": "19:05",
          "datename": "Today"
        },
        {
          "value": "19:10",
          "datename": "Today"
        },
        {
          "value": "19:15",
          "datename": "Today"
        },
        {
          "value": "19:20",
          "datename": "Today"
        },
        {
          "value": "19:25",
          "datename": "Today"
        },
        {
          "value": "19:30",
          "datename": "Today"
        },
        {
          "value": "19:35",
          "datename": "Today"
        },
        {
          "value": "19:40",
          "datename": "Today"
        },
        {
          "value": "19:45",
          "datename": "Today"
        },
        {
          "value": "19:50",
          "datename": "Today"
        },
        {
          "value": "19:55",
          "datename": "Today"
        },
        {
          "value": "20:00",
          "datename": "Today"
        },
        {
          "value": "20:05",
          "datename": "Today"
        },
        {
          "value": "20:10",
          "datename": "Today"
        },
        {
          "value": "20:15",
          "datename": "Today"
        },
        {
          "value": "20:20",
          "datename": "Today"
        },
        {
          "value": "20:25",
          "datename": "Today"
        },
        {
          "value": "20:30",
          "datename": "Today"
        },
        {
          "value": "20:35",
          "datename": "Today"
        },
        {
          "value": "20:40",
          "datename": "Today"
        },
        {
          "value": "20:45",
          "datename": "Today"
        },
        {
          "value": "20:50",
          "datename": "Today"
        },
        {
          "value": "20:55",
          "datename": "Today"
        },
        {
          "value": "21:00",
          "datename": "Today"
        },
        {
          "value": "21:05",
          "datename": "Today"
        },
        {
          "value": "21:10",
          "datename": "Today"
        },
        {
          "value": "21:15",
          "datename": "Today"
        },
        {
          "value": "21:20",
          "datename": "Today"
        },
        {
          "value": "21:25",
          "datename": "Today"
        },
        {
          "value": "21:30",
          "datename": "Today"
        },
        {
          "value": "21:35",
          "datename": "Today"
        },
        {
          "value": "21:40",
          "datename": "Today"
        },
        {
          "value": "21:45",
          "datename": "Today"
        },
        {
          "value": "21:50",
          "datename": "Today"
        },
        {
          "value": "21:55",
          "datename": "Today"
        },
        {
          "value": "22:00",
          "datename": "Today"
        }
      ]
    }
  };
  respDataCategory:any={
    "success": true,
    "data": [
      {
        "id": "8",
        "name": "CANDIDATOS A GOBERNADOR REGIONAL",
        "description": "Want a blow dry but can't find time for the salon? Now you don't have to. Book a mobile hairdresser to your home anywhere in London. So whether it's a business meeting, a hot date or a girls night out, blow LTD has the best stylists available any time, 7am till late.",
        "icon": "menu_70963haircut-834280_640.jpg",
        "sort_order": "1",
        "type": null,
        "time_for_pre_order": null,
        "status": "1",
        "meta_title": null,
        "meta_description": null,
        "meta_keywords": null,
        "url_link": null,
        "isscg": "",
        "scg": [],
        "prd": [
          {
            "id": "1",
            "cattegory_id": "8",
            "sub_category_id": "0",
            "name": "PARTIDO FRENTE DE LA ESPERANZA 2021 - Fernando Salas Tapia",
            "description": "<p>Asesor Empresarial, Gerente General, Coordinador Binacional...",
            "price": "",

            "image": "../../assets/candidatos/GR/GR-FERNANDO-SALAS-TAPIA.jpg",
            "imageDesc": "../../assets/candidatos/GR/1.png",
            
            "unique_id": "PRD-178090250",
            "status": "1",
            "sold": "2021-08-26",
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "",
            "minutes_time": "",
            "imgs": [
              "../../assets/candidatos/GR/GR-FERNANDO-SALAS-TAPIA.jpg",
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p></p>"
          },

          {
            "id": "2",
            "cattegory_id": "8",
            "sub_category_id": "0",
            "name": "REFORMA Y HONRADEZ POR MAS OBRAS - Richard Hancco Soncco",
            "description": "<p> Fiscal Provincial, Asistente...",
            "price": "",
            "image": "../../assets/candidatos/GR/GR-RICHARD-ANCCO.jpg",
            "imageDesc": "../../assets/candidatos/GR/2.png",
            "unique_id": "PRD-978090724",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "1",
            "minutes_time": "30",
            "imgs": [
              "../../assets/candidatos/GR/GR-RICHARD-ANCCO.jpg",
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p></p>"
          },
       
          {
            "id": "3",
            "cattegory_id": "8",
            "sub_category_id": "0",
            "name": "ALIANZA PARA EL PROGRESO - Irene Carcausto Huanca",
            "description": "<p> Docente...",
            "price": "",
            "image": "../../assets/candidatos/GR/GR-IRENE-CARCAUSTO-HUANCA.jpg",
            "imageDesc": "../../assets/candidatos/GR/3.png",
            "unique_id": "PRD-978090724",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "",
            "minutes_time": "",
            "imgs": [
              "../../assets/candidatos/GR/GR-IRENE-CARCAUSTO-HUANCA.jpg",
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p></p>"
          },
       

          {
            "id": "4",
            "cattegory_id": "8",
            "sub_category_id": "0",
            "name": "FRENTE AMPLIO PARA EL DESARROLLO DEL PUEBLO - Edgar Hugo Supo Tipula",
            "description": "<p> Periodista ...",
            "price": "",
            "image": "../../assets/candidatos/GR/GR-EDGAR-HUGO-SUPO-TIPULA.jpg",
            "imageDesc": "../../assets/candidatos/GR/4.png",
            "unique_id": "PRD-978090724",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "",
            "minutes_time": "",
            "imgs": [
              "../../assets/candidatos/GR/GR-EDGAR-HUGO-SUPO-TIPULA.jpg",
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p></p>"
          },
       

          {
            "id": "5",
            "cattegory_id": "8",
            "sub_category_id": "0",
            "name": "GESTIONANDO OBRAS Y OPORTUNIDADES CON LIDERAZGO - Hugo Raul Tapara Saya",
            "description": "<p> Docente ciencias sociales...",
            "price": "",
            "image": "../../assets/candidatos/GR/GR-HUGO-RAUL-TAPARA-SAYA.jpg",
            "imageDesc": "../../assets/candidatos/GR/5.png",
            "unique_id": "PRD-978090724",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "",
            "minutes_time": "",
            "imgs": [
              "../../assets/candidatos/GR/GR-HUGO-RAUL-TAPARA-SAYA.jpg",
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p></p>"
          },
       
          {
            "id": "6",
            "cattegory_id": "8",
            "sub_category_id": "0",
            "name": "MORAL Y DESARROLLO - Hugo Cesar Quinto Huaman",
            "description": "<p> Promotor de Asociacion Educativa Sigma...",
            "price": "",
            "image": "../../assets/candidatos/GR/GR-HUGO-CESAR-QUINTO-HUAMAN.jpg",
            "imageDesc": "../../assets/candidatos/GR/6.png",
            "unique_id": "PRD-978090724",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "",
            "minutes_time": "",
            "imgs": [
              "../../assets/candidatos/GR/GR-HUGO-CESAR-QUINTO-HUAMAN.jpg",
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p></p>"
          },

          {
            "id": "7",
            "cattegory_id": "8",
            "sub_category_id": "0",
            "name": "SOMOS PUEBLO - Wilber Cutipa Alejo",
            "description": "<p> Ingeniero Economista Independiente...",
            "price": "",
            "image": "../../assets/candidatos/GR/GR-WILVER-CUTIPA-ALEJO.jpg",
            "imageDesc": "../../assets/candidatos/GR/7.png",
            "unique_id": "PRD-978090724",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "",
            "minutes_time": "",
            "imgs": [
              "../../assets/candidatos/GR/GR-WILVER-CUTIPA-ALEJO.jpg",
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p></p>"
          },

          {
            "id": "8",
            "cattegory_id": "8",
            "sub_category_id": "0",
            "name": "MOVIMIENTO DE INTEGRACION Y REVOLUCION ANDINA - Jhomar Marcelino Tonconi Quispe",
            "description": "<p> Decano de colegio de Ingenieros...",
            "price": "",
            "image": "../../assets/candidatos/GR/GR-JHOMAR-MARCELINO-TONCONI-QUISPE.jpg",
            "imageDesc": "../../assets/candidatos/GR/8.png",
            "unique_id": "PRD-978090724",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "",
            "minutes_time": "",
            "imgs": [
              "../../assets/candidatos/GR/GR-JHOMAR-MARCELINO-TONCONI-QUISPE.jpg",
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p></p>"
          },

          {
            "id": "9",
            "cattegory_id": "8",
            "sub_category_id": "0",
            "name": "PARTIDO POLITICO NACIONAL PERU LIBRE - Julio Adolfo Iruri Davila",
            "description": "<p> Abogado por la Universidad Nacional del Altiplano...",
            "price": "",
            "image": "../../assets/candidatos/GR/GR-JULIO-ADOLFO-IRURI-DAVILA.jpg",
            "imageDesc": "../../assets/candidatos/GR/9.png",
            "unique_id": "PRD-978090724",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "",
            "minutes_time": "",
            "imgs": [
              "../../assets/candidatos/GR/GR-JULIO-ADOLFO-IRURI-DAVILA.jpg",
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p></p>"
          },
        ],
        "count": 1,
        "filter": null
      },
      /*{
        "id": "11",
        "name": "Facials",
        "description": "Enjoy a luxurious, professional facial in the comfort and safety of your home.",
        "icon": "category_66700massage-1929064_640.jpg",
        "sort_order": "2",
        "type": null,
        "time_for_pre_order": null,
        "status": "1",
        "meta_title": null,
        "meta_description": null,
        "meta_keywords": null,
        "url_link": null,
        "isscg": "",
        "scg": [],
        "prd": [
          {
            "id": "14",
            "cattegory_id": "11",
            "sub_category_id": "0",
            "name": "The Ultimate Million Dollar Facial",
            "description": "<p>Need fabulous results, fast? The Million Dollar Facial is an advanc...",
            "price": "149.00",
            "image": "a:1:{i:0;s:43:\"how-often-should-you-get-a-facial-lede.jpeg\";}",
            "unique_id": "PRD-428094908",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "1",
            "minutes_time": "10",
            "imgs": [
              "how-often-should-you-get-a-facial-lede.jpeg"
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p>Need fabulous results, fast? The Million Dollar Facial is an advanced, ten-step facial which works your skin from the outside in. Your therapist will use a combination of high-tech treatments including Dermaplaning, Microneedling, Lymphatic Drainage and Icey Globes to flush out toxins, stimulate natural collagen and cell turnover and help treat conditions such as puffiness, breakouts rosacea and pigmentation.</p>"
          },
          {
            "id": "15",
            "cattegory_id": "11",
            "sub_category_id": "0",
            "name": "The Million Dollar Microneedling Facial",
            "description": "<p>A real powerhouse for results. Microneedling is an advanced clinica...",
            "price": "89.00",
            "image": "a:1:{i:0;s:35:\"istockphoto-1171697897-612x612.jpeg\";}",
            "unique_id": "PRD-611094848",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "",
            "minutes_time": "45",
            "imgs": [
              "istockphoto-1171697897-612x612.jpeg"
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p>A real powerhouse for results. Microneedling is an advanced clinical treatment designed for instant skin rejuvenation. The procedure uses sterile micro-needles to prick the skin, to generate new collagen and skin tissue for smoother, firmer and more toned skin. With little pain or discomfort, your spa-trained therapist will use a Microneedle dermaroller to improve and treat conditions such as acne scarring, fine lines, wrinkles, enlarged pores and pigmentation.</p>"
          },
          {
            "id": "16",
            "cattegory_id": "11",
            "sub_category_id": "0",
            "name": "Decleor Ultimate Vitamin Glow Facial ",
            "description": "<p>Suited to all skin types, this internationally renowned, multi-awar...",
            "price": "74.00",
            "image": "a:1:{i:0;s:18:\"1453683787978.jpeg\";}",
            "unique_id": "PRD-325094825",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "1",
            "minutes_time": "10",
            "imgs": [
              "1453683787978.jpeg"
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p>Suited to all skin types, this internationally renowned, multi-award-winning Decl&eacute;or facial relieves stress, and is power-packed with vitamins and anti-oxidants, leaving skin glowing with vitality.</p>"
          },
          {
            "id": "17",
            "cattegory_id": "11",
            "sub_category_id": "0",
            "name": "Decleor Moisture Surge Facial",
            "description": "<p>This deeply hydrating facial is designed to quench the thirst of dr...",
            "price": "75.00",
            "image": "a:1:{i:0;s:22:\"facial-treatment2.jpeg\";}",
            "unique_id": "PRD-310094804",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "1",
            "minutes_time": "",
            "imgs": [
              "facial-treatment2.jpeg"
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p>This deeply hydrating facial is designed to quench the thirst of dry, dehydrated skin by using the Decl&eacute;or Neroli Essential Oil and Hyaluronic Acid to lock in moisture. Your skin will be left feeling rehydrated, smooth and super-soft.</p>"
          },
          {
            "id": "18",
            "cattegory_id": "11",
            "sub_category_id": "0",
            "name": "Decleor Firming Facial ",
            "description": "<p>Created specifically to revitalise, plump and firm the skin for a m...",
            "price": "75.00",
            "image": "a:1:{i:0;s:23:\"woman-6485473__480.jpeg\";}",
            "unique_id": "PRD-796094742",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "1",
            "minutes_time": "",
            "imgs": [
              "woman-6485473__480.jpeg"
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p>Created specifically to revitalise, plump and firm the skin for a more youthful looking complexion. Using a bespoke blend of 100% natural Decl&eacute;or products, this re-energising facial smooths the appearance of lines and wrinkles, and includes an invigorating massage and a gentle exfoliation.</p>"
          },
          {
            "id": "19",
            "cattegory_id": "11",
            "sub_category_id": "0",
            "name": "Decleor Skin Soother Facial",
            "description": "<p>Designed with the more delicate skin-type in mind, this intensely n...",
            "price": "75.00",
            "image": "a:1:{i:0;s:32:\"hba-damagedskinfacials-lead.jpeg\";}",
            "unique_id": "PRD-830094715",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "1",
            "minutes_time": "10",
            "imgs": [
              "hba-damagedskinfacials-lead.jpeg"
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p>Designed with the more delicate skin-type in mind, this intensely nurturing facial using Decl&eacute;or products soothes and conditions sensitive skin, instantly relieving stressed and fragile complexions. Organic Bulgarian Rose will leave the skin feeling soothed and resilient.</p>"
          }
        ],
        "count": 1,
        "filter": null
      },
      {
        "id": "12",
        "name": "Massage",
        "description": "Discover the joy of rolling into bed after a five star spa-grade massage in your home. ",
        "icon": "category_13762wellness-285587_640.jpg",
        "sort_order": "3",
        "type": null,
        "time_for_pre_order": null,
        "status": "1",
        "meta_title": null,
        "meta_description": null,
        "meta_keywords": null,
        "url_link": null,
        "isscg": "",
        "scg": [],
        "prd": [
          {
            "id": "11",
            "cattegory_id": "12",
            "sub_category_id": "0",
            "name": "CBD Massage",
            "description": "<p>We are proud to offer massages for women, by women, so you can rela...",
            "price": "79.00",
            "image": "a:1:{i:0;s:23:\"wellness-285589_640.jpg\";}",
            "unique_id": "PRD-480094629",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "1",
            "minutes_time": "",
            "imgs": [
              "wellness-285589_640.jpg"
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p>We are proud to offer massages for women, by women, so you can relax knowing you are in safe and expert hands. Your spa-trained therapist will arrive with her massage table, CBD Massage Oil from leading UK brand Honest Hemp (containing organic hemp, frankincense, lavender and chamomile) and music playlist to create a spa-at-home experience. Our CBD Massage combines Deep Tissue techniques, applying strong, sustained pressure and slow deep strokes.</p>"
          },
          {
            "id": "12",
            "cattegory_id": "12",
            "sub_category_id": "0",
            "name": "Deep Tissue Massage",
            "description": "<p>We are proud to offer massages for women, by women, so you can rela...",
            "price": "65.00",
            "image": "a:1:{i:0;s:22:\"massage-486700_640.jpg\";}",
            "unique_id": "PRD-904095003",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "1",
            "minutes_time": "10",
            "imgs": [
              "massage-486700_640.jpg"
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p>We are proud to offer massages for women, by women, so you can relax knowing you are in safe and expert hands. Your spa-trained therapist will arrive with her massage table, premium oils and music playlist to create a spa-at-home experience. She will use Deep Tissue Massage techniques, applying strong and sustained pressure and slow, deep strokes to target the inner layers of muscle and connective tissue. This massage is designed to improve flexibility and relieve tension and muscle-ache. Your massage will last 60 minutes, with an additional 10 minutes for set up time.</p>"
          },
          {
            "id": "13",
            "cattegory_id": "12",
            "sub_category_id": "0",
            "name": "Swedish Massage",
            "description": "<p>We are proud to offer massages for women, by women, so you can rela...",
            "price": "65.00",
            "image": "a:1:{i:0;s:21:\"woman-3701712_640.jpg\";}",
            "unique_id": "PRD-822094943",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "1",
            "minutes_time": "",
            "imgs": [
              "woman-3701712_640.jpg"
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p>We are proud to offer massages for women, by women, so you can relax knowing you are in safe and expert hands. Your spa-trained therapist will arrive with her massage table, premium oils and music playlist to create a truly relaxing experience. She will use Swedish Massage techniques involving long, gentle kneading strokes to help ease muscle tension, promote joint mobility and relax your mind and your body. Your massage will last 60 minutes, with an additional 10 minutes for set up time.</p>"
          }
        ],
        "count": 1,
        "filter": null
      },
      {
        "id": "13",
        "name": "Waxing",
        "description": "Our mobile beauty services mean you can book your waxing appointments at your home, office or hotel",
        "icon": "category_45479sunblock-1461397_640.jpg",
        "sort_order": "4",
        "type": null,
        "time_for_pre_order": null,
        "status": "1",
        "meta_title": null,
        "meta_description": null,
        "meta_keywords": null,
        "url_link": null,
        "isscg": "OK",
        "scg": [
          {
            "id": "14",
            "catid": "13",
            "name": "Leg & Underarm Wax",
            "icon": "subcategory_2948210f5b96bf75c10005989cf5c6570986c.jpeg",
            "status": "1"
          },
          {
            "id": "15",
            "catid": "13",
            "name": "Full Face Wax",
            "icon": "subcategory_63394depositphotos_107619982-stock-photo-closeup-womans-face-receiving-facial.jpeg",
            "status": "1"
          }
        ],
        "prd": [
          {
            "id": "5",
            "cattegory_id": "13",
            "sub_category_id": "14",
            "name": "Eyebrow Wax",
            "description": "<p>Full removal of hair from your legs and underarm area. All hair wil...",
            "price": "15.00",
            "image": "a:1:{i:0;s:37:\"10f5b96bf75c10005989cf5c6570986c.jpeg\";}",
            "unique_id": "PRD-251095201",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "",
            "minutes_time": "15",
            "imgs": [
              "10f5b96bf75c10005989cf5c6570986c.jpeg"
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p>Full removal of hair from your legs and underarm area. All hair will also be removed from the front and back of your intimate area.</p>"
          },
          {
            "id": "6",
            "cattegory_id": "13",
            "sub_category_id": "14",
            "name": "CHIN WAX",
            "description": "<p>Full removal of hair from your legs and underarm area. All hair wil...",
            "price": "15.00",
            "image": "a:1:{i:0;s:53:\"360_F_140892344_XRLtm0NHef0UwRV22aTJrZva4ryQ4KhS.jpeg\";}",
            "unique_id": "PRD-292095225",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "",
            "minutes_time": "15",
            "imgs": [
              "360_F_140892344_XRLtm0NHef0UwRV22aTJrZva4ryQ4KhS.jpeg"
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p>Full removal of hair from your legs and underarm area. All hair will also be removed from the front and back of your intimate area.</p>"
          },
          {
            "id": "7",
            "cattegory_id": "13",
            "sub_category_id": "14",
            "name": "Upper Lip Wax",
            "description": "<p>Full removal of hair from your legs and underarm area. All hair wil...",
            "price": "15.00",
            "image": "a:1:{i:0;s:70:\"beauty-salon-mustache-depilation-facial-skin-treatment-and-care-1.jpeg\";}",
            "unique_id": "PRD-317095250",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "",
            "minutes_time": "15",
            "imgs": [
              "beauty-salon-mustache-depilation-facial-skin-treatment-and-care-1.jpeg"
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p>Full removal of hair from your legs and underarm area. All hair will also be removed from the front and back of your intimate area.</p>"
          },
          {
            "id": "8",
            "cattegory_id": "13",
            "sub_category_id": "14",
            "name": "Arm Wax",
            "description": "<p>Full removal of hair from your legs and underarm area. All hair wil...",
            "price": "20.00",
            "image": "a:1:{i:0;s:13:\"c700x420.jpeg\";}",
            "unique_id": "PRD-670095313",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "",
            "minutes_time": "20",
            "imgs": [
              "c700x420.jpeg"
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p>Full removal of hair from your legs and underarm area. All hair will also be removed from the front and back of your intimate area.</p>"
          },
          {
            "id": "9",
            "cattegory_id": "13",
            "sub_category_id": "15",
            "name": "Face Wax",
            "description": "<p>Wax away any unwanted hair from the full facial area including chee...",
            "price": "45.00",
            "image": "a:1:{i:0;s:77:\"depositphotos_107619982-stock-photo-closeup-womans-face-receiving-facial.jpeg\";}",
            "unique_id": "PRD-404095334",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "",
            "minutes_time": "55",
            "imgs": [
              "depositphotos_107619982-stock-photo-closeup-womans-face-receiving-facial.jpeg"
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p>Wax away any unwanted hair from the full facial area including cheeks, hairline, lip and chin, tidy up your brows and say hello to softer skin. Your appointment will include a personalised consultation to determine whether strip or hot wax is best for you.</p>"
          },
          {
            "id": "10",
            "cattegory_id": "13",
            "sub_category_id": "15",
            "name": "Brow, Lip & Chin Wax",
            "description": "<p>Wax away any unwanted hair from the lip and chin, tidy up your brow...",
            "price": "40.00",
            "image": "a:1:{i:0;s:32:\"facial-treatment-5529815_640.jpg\";}",
            "unique_id": "PRD-328095111",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "",
            "minutes_time": "50",
            "imgs": [
              "facial-treatment-5529815_640.jpg"
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p>Wax away any unwanted hair from the lip and chin, tidy up your brows and say hello to softer skin. Your appointment will include a personalised consultation to determine whether strip or hot wax is best for you.</p>"
          }
        ],
        "count": 1,
        "filter": null
      },
      {
        "id": "9",
        "name": "Hair Colour",
        "description": "New! Why go to the salon when you can have salon-grade hair colour for 30% less, in the comfort and safety of your own home? Our expertly trained and hygiene-certified colourists will work with you to find your perfect style and colour. Bookings available five days (or more) in advance, to allow tim",
        "icon": "menu_43024pink-hair-1450045_640.jpg",
        "sort_order": "5",
        "type": null,
        "time_for_pre_order": null,
        "status": "1",
        "meta_title": null,
        "meta_description": null,
        "meta_keywords": null,
        "url_link": null,
        "isscg": "OK",
        "scg": [
          {
            "id": "16",
            "catid": "9",
            "name": "Permanent Colour",
            "icon": "subcategory_6743489518259-stylist-puts-a-hair-dryer-and-comb-hair-in-a-hairdresser.jpeg",
            "status": "1"
          },
          {
            "id": "17",
            "catid": "9",
            "name": "Highlights & Balayage",
            "icon": "subcategory_74831caramel-mocha-hair.jpeg",
            "status": "1"
          }
        ],
        "prd": [
          {
            "id": "20",
            "cattegory_id": "9",
            "sub_category_id": "16",
            "name": "Permanent Colour, Cut & Blow Dry",
            "description": "<p>Save up to 30% on salon prices by booking your Full Head Colour at ...",
            "price": "109.00",
            "image": "a:1:{i:0;s:99:\"89189945-master-in-a-hairdresser-dries-her-hair-to-a-girl-with-a-hairdryer-and-makes-a-styling.jpeg\";}",
            "unique_id": "PRD-848094440",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "1",
            "minutes_time": "55",
            "imgs": [
              "89189945-master-in-a-hairdresser-dries-her-hair-to-a-girl-with-a-hairdryer-and-makes-a-styling.jpeg"
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p>Save up to 30% on salon prices by booking your Full Head Colour at home (typical salon price &pound;128). This service includes a personalised plan from an expert colourist followed by a visit at home for a full salon-grade colour refresh, a cut and blow dry. To protect, nourish and strengthen your hair book an &lsquo;Olaplex&rsquo; service extra at checkout.</p>"
          }
        ],
        "count": 1,
        "filter": null
      },
      {
        "id": "10",
        "name": "Nails",
        "description": "We use all our manicures and pedicures and our mobile nail technicians can come to you 7 days a week",
        "icon": "category_5973painting-fingernails-635261_640.jpg",
        "sort_order": "6",
        "type": null,
        "time_for_pre_order": null,
        "status": "1",
        "meta_title": null,
        "meta_description": null,
        "meta_keywords": null,
        "url_link": null,
        "isscg": "",
        "scg": [],
        "prd": [
          {
            "id": "22",
            "cattegory_id": "10",
            "sub_category_id": "0",
            "name": "Nail polish application",
            "description": "<p>Nail polish application of your choice either on hands or legs.&nbs...",
            "price": "2.00",
            "image": "a:1:{i:0;s:15:\"nail_polish.jpg\";}",
            "unique_id": "PRD-800091845",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "00",
            "minutes_time": "20",
            "imgs": [
              "nail_polish.jpg"
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p>Nail polish application of your choice either on hands or legs.&nbsp;</p>"
          }
        ],
        "count": 1,
        "filter": null
      },
      {
        "id": "7",
        "name": "Makeup",
        "description": "If youâ€™re bored of your everyday makeup look but donâ€™t have the time, skills or confidence to experiment yourself, book an appointment with blow LTD! Weâ€™re the UKâ€™s leading on demand beauty services platform that connects you to the very best professional makeup artists in London at a time a",
        "icon": "menu_1074fashion-4781538_640.jpg",
        "sort_order": "8",
        "type": null,
        "time_for_pre_order": null,
        "status": "1",
        "meta_title": null,
        "meta_description": null,
        "meta_keywords": null,
        "url_link": null,
        "isscg": "OK",
        "scg": [
          {
            "id": "6",
            "catid": "7",
            "name": "Super Glam Makeup",
            "icon": "subcategory_72175e1d4207e8d26aa20a79041b9f0ad5894.jpeg",
            "status": "1"
          },
          {
            "id": "7",
            "catid": "7",
            "name": "Soft Glam Makeup",
            "icon": "subcategory_67247594f19bbd554c5d15c3afb64ea6bde60.jpeg",
            "status": "1"
          },
          {
            "id": "8",
            "catid": "7",
            "name": "Polished Day Makeup",
            "icon": "subcategory_315731_LyEMlGIQ-acy2pFS4CnheA.jpeg",
            "status": "1"
          },
          {
            "id": "9",
            "catid": "7",
            "name": "Day Makeup",
            "icon": "subcategory_9312955092f46781dc-ghk-0714-day-to-night-3-mdn.jpeg",
            "status": "1"
          }
        ],
        "prd": [
          {
            "id": "4",
            "cattegory_id": "7",
            "sub_category_id": "6",
            "name": "Party Lasher",
            "description": "<p>Going out, out? Then dial up the volume to 11 with our Super Glam l...",
            "price": "10.00",
            "image": "a:1:{i:0;s:15:\"78666577_m.jpeg\";}",
            "unique_id": "PRD-633095133",
            "status": "1",
            "sold": null,
            "sorting_order": "0",
            "recipe": null,
            "unavailable_date": null,
            "hours_time": "",
            "minutes_time": "10",
            "imgs": [
              "78666577_m.jpeg"
            ],
            "preorder": "",
            "isAvailable": "",
            "contain": [
              ""
            ],
            "longdesc": "<p>Going out, out? Then dial up the volume to 11 with our Super Glam look! Think intensely smokey eyes and full-drama lashes, plus expertly contoured and highlighted skin and full, glossy lips. Your professional makeup artist will create the perfect intense look that most flatters your complexion.</p>"
          }
        ],
        "count": 1,
        "filter": null
      }*/
    ]
  };
  appstngs: any = {};
  apptitle: any;
  newcategory: any = {};
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
    public nav: NavController,
    private appVersion: AppVersion,
    private iab: InAppBrowser,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.homepage               = "Services";
    this.imgpath                = environment.imagepath;
    this.apptitle               = environment.appname;
    this.logeduser              = this.localApi.getuser();
    this.gethomecat();
    console.log("========================");
    //this.apiService.getdata('getappsetings', '').subscribe((resp: any) => {
      this.localApi.setappseting(this.respData.data);
      this.appstngs             = this.respData.data;
      if(this.respData.data.opentime.toDayShop=='CLOSE'){
        this.isShopclose        = true;
        this.closetxt           = this.respData.data.opentime;
      }
      if(this.respData.data.restrictions_label){
        this.restrictns_lbl     = this.respData.data.restrictions_label;
        this.restrictns_txt     = this.respData.data.restrictions_text;
        this.isRestricktn       = true;
      }
      var self = this;
      this.appVersion.getVersionNumber().then(function (data) {
        console.log("ok version");
        if(self.platform.is('android')){
          if(this.respData.data.androidversion > data){
            self.appupdatesandroid();
          }
        } else {
          console.log("resp.data.iosversion",this.respData.data.iosversion);
          console.log("data",data);
          if(this.respData.data.iosversion > data){
            self.appupdatesios();
          }
        }
      });

    //}, (err: any) => {
    //return false;
  //  });
  }

  async pophomepalrt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      // header: 'Alert',
      subHeader: this.appstngs.pop_head,
      message: this.appstngs.pop_desc,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  async appupdatesandroid() {  
    const alert = await this.alertController.create({
      header: 'Update Available!',
      cssClass: 'my-custom-class',
      message: 'Please update the app to get the latest features, offers and discounts.',
      buttons: [
        {
          text: 'Not Now',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'OK',
          handler: () => {
            const browser = this.iab.create(environment.playstore, '_system');
          }
        }
      ]
    });
    await alert.present();
  }

  async appupdatesios() {  
    const alert = await this.alertController.create({
      header: 'Update Available!',
      cssClass: 'my-custom-class',
      message: 'Please update the app to get the latest features, offers and discounts.',
      buttons: [
        {
          text: 'Not Now',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'OK',
          handler: () => {
            const browser = this.iab.create(environment.appstore, '_system');
          }
        }
      ]
    });
    await alert.present();
  }

  noshopping(){
    this.isShopclose = false;
    if(this.restrictns_lbl){
      this.isRestricktn = true;
    }
  }

  gomyacount() {
    this.route.navigate(['/myaccount/any']);
  }

  async openloginpanel() {
    const modal = await this.modalController.create({
      component: LoginpagePage,
      cssClass: 'my-custom-class',
      backdropDismiss: true
    });
    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.logeduser = this.localApi.getuser();
        this.route.navigate(['/myaccount/any']);
      }
    });
    return await modal.present();
  }

  alrestclose(){
    this.isRestricktn = false;
  }

  ionViewWillEnter(){
    this.logeduser              = this.localApi.getuser();
    this.mycart = this.cart.getcart();
    console.log("this.cart.getcart()",this.cart.getcart());
    this.carttotal = this.cart.getTotalCart();
    this.cartcount = this.mycart.length;
    this.getappsetng = this.localApi.getappseting();
    this.localApi.removedeltime();
    let views = localStorage.getItem(environment.storage_prefix+'bktohome');
    if(views){
      this.gethomecat();
    }

    this.basic.getObservable().subscribe((data) => {
        this.totlaofcart();
    });

  }

  viewsearpg(){
    this.route.navigate(['/itemsearch']);
  }

  totlaofcart(){
    this.mycart = this.cart.getcart();
    this.carttotal = this.cart.getTotalCart();
    this.cartcount = this.mycart.length;
  }

  gethomecat(){
    localStorage.removeItem(environment.storage_prefix+"bktohome");
    this.totlaofcart();
    this.basic.presentLoading();
    //this.apiService.getdata('gethomecategory', '').subscribe((resp: any) => {
    this.category = this.respDataCategory.data;
    console.log("resp.data",this.respDataCategory.data);
    for(let i=0; i < this.category.length; i++){

      let prd = this.category[i].prd;
          for(let j=0; j < prd.length; j++){
            let single = prd[j];
            let qty = this.cart.getSingleQty(single.id);
            this.category[i].prd[j].qty = qty;
            this.category[i].prd[j].crtbtn = 'Select';
            if(this.category[i].prd[j].hours_time){
              this.category[i].prd[j].corner_text = this.category[i].prd[j].hours_time+' Hour';
            }
            if(this.category[i].prd[j].minutes_time){
              this.category[i].prd[j].corner_text = this.category[i].prd[j].minutes_time+' Minutes';
            }
            if(this.category[i].prd[j].hours_time && this.category[i].prd[j].minutes_time){
              this.category[i].prd[j].corner_text = this.category[i].prd[j].hours_time+' Hour '+this.category[i].prd[j].minutes_time+' Minutes';
            }
        }
        if(i === 0){
          
          this.segmentChanged(this.category[i].id,'0');
        }
      }
      setTimeout(()=>{
        this.sesinlefct = true;
        if(this.basic.isLoading){
          this.basic.dismissloader();
        }
      },5000)
      
    /*}, (err: any) => {
      this.basic.dismissloader();
    return false;
    });*/

    //this.apiService.postdata('getbanner', this.postdata).subscribe((resp: any) => {
      this.banners = [];
    /*}, (err: any) => {
      return false;
    });*/
    
  }

  segmentChanged(id,ii){
    for(let i=0; i < this.category.length; i++){
      if(this.category[i].id == id){
        if(ii == 0){
          console.log("0",ii);
          this.category[i].segstyle = 'segment-button-checked';
        }
        else{
          console.log("0",ii);
          this.category[0].segstyle = '';
        }
        let prd = this.category[i].prd;
        for(let j=0; j < prd.length; j++){
          let single = prd[j];
          let qty = this.cart.getSingleQty(single.id);
          this.category[i].prd[j].qty = qty;
          this.category[i].prd[j].crtbtn = 'Select';
          if(this.category[i].prd[j].hours_time){
            this.category[i].prd[j].corner_text = this.category[i].prd[j].hours_time+' Hour';
          }
          if(this.category[i].prd[j].minutes_time){
            this.category[i].prd[j].corner_text = this.category[i].prd[j].minutes_time+' Minutes';
          }
          if(this.category[i].prd[j].hours_time && this.category[i].prd[j].minutes_time){
            this.category[i].prd[j].corner_text = this.category[i].prd[j].hours_time+' Hour '+this.category[i].prd[j].minutes_time+' Minutes';
          }
        }
        this.newcategory = this.category[i];
      }
    }
    console.log("this.newcategory",this.newcategory);
    console.log("newcategory.isscg",this.newcategory.isscg);
  }

  doRefresh(event) {
    setTimeout(() => {
      this.gethomecat();
      event.target.complete();
    }, 2000);
  }

  addtoCart(itm, itmid){
    console.log("itm.id",itm.id);
    console.log("itmid",itmid);
    $('#addcartbtn_'+itmid+'_'+itm.id).hide();
    $('#qtycartbtn_'+itmid+'_'+itm.id).show();
    $('#itmqty_'+itmid+'_'+itm.id).html('1');
    this.cart.addcart(itm,'','','');
    this.totlaofcart();
  }

  minusqty(itm, itmid){
    this.nowqty = '';
    this.nowval = '';
    this.nowqty = $('#itmqty_'+itmid+'_'+itm.id).html();
    if(this.nowqty == 1){
      $('#addcartbtn_'+itmid+'_'+itm.id).show();
    $('#qtycartbtn_'+itmid+'_'+itm.id).hide();
    }
    this.nowval = parseInt(this.nowqty)-1;
    $('#itmqty_'+itmid+'_'+itm.id).html(this.nowval);
    this.cart.minusqntyfrmprod(itm);
    this.totlaofcart();
    
  }
  addqty(itm, itmid){
    this.nowqty = '';
    this.nowval = '';
    this.nowqty = $('#itmqty_'+itmid+'_'+itm.id).html();
    this.nowval = parseInt(this.nowqty)+1;
    $('#itmqty_'+itmid+'_'+itm.id).html(this.nowval);
    $('#itmqty_'+itmid+'_'+itm.id).delay(1500).animate({text:this.nowval},5000);
    this.cart.plusqnty(itm);
    this.totlaofcart();
  }

  async openDetailsItem(itm) {
    const modal = await this.modalController.create({
      component: ItemdetailsPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'item': itm,
      },
      backdropDismiss: true,
    });
    return await modal.present();
  }

  seeall(item){
    if(item.isscg){
      this.route.navigate(['/subcategory/'+item.id+'/'+item.name]);
    } else {
      this.route.navigate(['/products/'+item.id+'/0/'+item.name]);
    }
  }

  gocategory(item){
    if(item.type){
      if(item.type == 'category'){
        this.route.navigate(['/products/'+item.category.id+'/0/'+item.category.name]);
      } else if(item.type == 'contact'){
        this.route.navigate(['/contactus']);
      } else {
        this.route.navigate(['/offers/noapply']);
      }
    }
  }

  viewmycart(){
    this.route.navigate(['/booknow']);
  }

  openAlergyInfo(val){
    if(val.allergy_info){
      this.basic.alert('Allergy Info:', val.allergy_info);
    }
  }

  gonextsbg(sbct,cat){
    this.route.navigate(['/products/'+cat.id+'/'+sbct.id+'/'+sbct.name]);
  }

}
