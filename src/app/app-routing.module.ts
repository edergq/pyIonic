import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
  },

  {
    path: 'homepage1',
    loadChildren: () => import('./homepage1/homepage.module').then( m => m.HomepagePageModule)
  },

  {
    path: 'homepage2',
    loadChildren: () => import('./homepage2/homepage.module').then( m => m.HomepagePageModule)
  },


  {
    path: 'homepage3',
    loadChildren: () => import('./homepage3/homepage.module').then( m => m.HomepagePageModule)
  },

  {
    path: 'homepage4',
    loadChildren: () => import('./homepage4/homepage.module').then( m => m.HomepagePageModule)
  },

  {
    path: 'homepage5',
    loadChildren: () => import('./homepage5/homepage.module').then( m => m.HomepagePageModule)
  },

  {
    path: 'homepage6',
    loadChildren: () => import('./homepage6/homepage.module').then( m => m.HomepagePageModule)
  },


  {
    path: 'homepage7',
    loadChildren: () => import('./homepage7/homepage.module').then( m => m.HomepagePageModule)
  },

  {
    path: 'homepage8',
    loadChildren: () => import('./homepage8/homepage.module').then( m => m.HomepagePageModule)
  },


  {
    path: 'loginpage',
    loadChildren: () => import('./loginpage/loginpage.module').then( m => m.LoginpagePageModule)
  },
  {
    path: 'ourstylists',
    loadChildren: () => import('./ourstylists/ourstylists.module').then( m => m.OurstylistsPageModule)
  },
  {
    path: 'imagegallerypage/:pgtype',
    loadChildren: () => import('./imagegallerypage/imagegallerypage.module').then( m => m.ImagegallerypagePageModule)
  },
  {
    path: 'aboutus/:pgtype',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'reviewandrating',
    loadChildren: () => import('./reviewandrating/reviewandrating.module').then( m => m.ReviewandratingPageModule)
  },
  {
    path: 'openinghours',
    loadChildren: () => import('./openinghours/openinghours.module').then( m => m.OpeninghoursPageModule)
  },
  {
    path: 'offer/:pgtype',
    loadChildren: () => import('./offer/offer.module').then( m => m.OfferPageModule)
  },
  {
    path: 'listviews/:pgtype',
    loadChildren: () => import('./listviews/listviews.module').then( m => m.ListviewsPageModule)
  },
  {
    path: 'ourteam/:pgtype',
    loadChildren: () => import('./ourteam/ourteam.module').then( m => m.OurteamPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'subcategory/:categoryid/:title',
    loadChildren: () => import('./subcategory/subcategory.module').then( m => m.SubcategoryPageModule)
  },
  {
    path: 'products/:category/:subcategory/:title',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'itemdetails',
    loadChildren: () => import('./itemdetails/itemdetails.module').then( m => m.ItemdetailsPageModule)
  },
  {
    path: 'offerdetails',
    loadChildren: () => import('./offerdetails/offerdetails.module').then( m => m.OfferdetailsPageModule)
  },
  {
    path: 'myaccount/:status',
    loadChildren: () => import('./myaccount/myaccount.module').then( m => m.MyaccountPageModule)
  },
  {
    path: 'profileupdate',
    loadChildren: () => import('./profileupdate/profileupdate.module').then( m => m.ProfileupdatePageModule)
  },
  {
    path: 'booknow',
    loadChildren: () => import('./booknow/booknow.module').then( m => m.BooknowPageModule)
  },
  {
    path: 'mybooking',
    loadChildren: () => import('./mybooking/mybooking.module').then( m => m.MybookingPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'videogallery/:pgtype',
    loadChildren: () => import('./videogallery/videogallery.module').then( m => m.VideogalleryPageModule)
  },
  {
    path: 'writereview',
    loadChildren: () => import('./writereview/writereview.module').then( m => m.WritereviewPageModule)
  },
  {
    path: 'orderdetails/:orderid/:pagetype',
    loadChildren: () => import('./orderdetails/orderdetails.module').then( m => m.OrderdetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
