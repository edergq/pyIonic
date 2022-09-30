/* eslint-disable @typescript-eslint/naming-convention */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  baseurl: 'localhost:80/',

  imagepath: 'your-image-path-url-here',

  onesignalkey: 'your-onesignalkey-here', // For user push notification

  firebasekey: 'your-firebase-key-here', // For user push notification

  developer_website: 'your-website-here',

  fb_profile: 'your-fb-profile-link-here', // After order user can review us on FB

  mobileprefix: '+44', //For whatsapp messages

  playstore: 'your-android-app-url-here',

  appstore: 'your-ios-app-url-here',

  iosrateandreview: 'itms-apps://apps.apple.com/app/xxxxxx?mt=8&action=write-review',    //replace xxxxxx with your app id

  app_share_text: 'Wite your share app text here',

  androidappid: 'your-android-app-id-here',

  iosappid: 'your-ios-app-id-here',

  appname: 'Candidatos',

  storage_prefix: 'salon_'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
