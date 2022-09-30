import { Component } from '@angular/core';
import { MenuController, ModalController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from 'src/Providers/Services/api.service';
import { LocalApiService } from 'src/Providers/Local/local-api.service';
import { LoginpagePage } from './loginpage/loginpage.page';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Gobierno Regional Puno', url: '/homepage', icon:'home'},
    { title: 'Gobierno Local San Roman', url: '/homepage1', icon:'man'},
    { title: 'Gobierno Local Puno', url: '/homepage2', icon:'man'},
    { title: 'Gobierno Local Lampa', url: '/homepage3', icon:'man'},
    { title: 'Gobierno Local San Antonio de Putina', url: '/homepage4', icon:'man'},
    { title: 'Gobierno Local San Pedro de Moho', url: '/homepage5', icon:'man'},
    { title: 'Gobierno Local Chucuito', url: '/homepage6', icon:'man'},
    { title: 'Gobierno Local Azangaro', url: '/homepage7', icon:'man'},
    { title: 'Gobierno Local Yunguyo', url: '/homepage8', icon:'man'},

   // { title: 'Our Services', url: '/ourstylists', icon:'man'},
   // { title: 'Make An Appointment', url: '/mybooking', icon:'calendar'},
   // { title: 'Offers', url: '/offer/noapply', icon:'gift'},
   // { title: 'Reviews / Ratings', url: '/reviewandrating', icon:'star-half'},
   // { title: 'Opening Hours', url: '/openinghours', icon:'time'},
   // { title: 'About Us', url: '/listviews/About Us', icon:'information-circle'},
   // { title: 'Help & Info', url: '/listviews/Help and Info', icon:'help-circle'},
   // { title: 'Contact Us', url: '/contactus', icon:'call'},
   // { title: 'Settings', url: '/listviews/Settings', icon:'settings'},
  ];
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
  appstngs: any;
  logeduser: any;
  postdata: any ={};
  constructor(
    private platform: Platform,
    public route: Router,
    public apiService: ApiService,
    public localApi: LocalApiService,
    private menu: MenuController,
    public modalController: ModalController,
    private oneSignal: OneSignal,
  ){
      this.initializeApp();
  }

  initializeApp() {
   // this.apiService.getdata('getappsetings', '').subscribe((resp: any) => {
      this.localApi.setappseting(this.respData.data);
      this.appstngs       = this.respData.data;
    //}, (err: any) => false);
    this.platform.ready().then(() => {
    this.oneSignal.startInit(environment.onesignalkey, environment.firebasekey);
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
    });
    this.oneSignal.handleNotificationOpened().subscribe((rsvnt) => {
      if (rsvnt.notification.payload.additionalData.type === 'Offers') {
        setTimeout(() => {
          this.route.navigate(['/offer/noapply']);
        }, 3000);
      }
    });

    this.oneSignal.promptForPushNotificationsWithUserResponse().then(() => {
      console.log('Hello My Name ', environment);
    });

    this.oneSignal.getIds().then(dvsid => {
      localStorage.setItem(environment.storage_prefix + 'userdevicetoken', dvsid.userId);
      this.setUserTokens(dvsid.userId);
    }).catch(err => {
      console.log('OneSGNLERR', err);
    });

    this.oneSignal.endInit();

    });
    this.logeduser = this.localApi.getuser();
  }

  setUserTokens(mytoken) {
    this.logeduser            = this.localApi.getuser();
    this.postdata.token       = mytoken;
    this.postdata.device      = 'Mobile';
    // this.postdata.device_type = this.device.platform;
    if(this.platform.is('android')){
      this.postdata.device_type = 'Android';
    }
    else{
      this.postdata.device_type = 'iOS';
    }
    this.postdata.user        = 'Customer';
    this.postdata.user_id     = '';

    this.apiService.postdata('setusertokens', this.postdata).subscribe((resp: any) => {
      console.log('Set Token', resp);
    }, (err: any) => false);
  }

  checklogin() {
    this.logeduser = this.localApi.getuser();
  }

  async openloginpanel() {
    this.menu.close();
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

  gomyacount() {
    this.menu.close();
    this.route.navigate(['/myaccount/any']);
  }

}
