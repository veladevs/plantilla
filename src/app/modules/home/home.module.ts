import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeGalleryComponent } from './home-gallery/home-gallery.component';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeNoticeComponent } from './home-notice/home-notice.component';
import { HomeSociosComponent } from './home-socios/home-socios.component';
import { HomeNosotrosComponent } from './home-nosotros/home-nosotros.component';
import { HomeModalComponent } from './home-modal/home-modal.component';
import { HomeServiciosComponent } from './home-servicios/home-servicios.component';


@NgModule({
  declarations: [
    HomeGalleryComponent,
    HomeComponent,
    HomeNoticeComponent,
    HomeSociosComponent,
    HomeNosotrosComponent,
    HomeModalComponent,
    HomeServiciosComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,

    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class HomeModule { }
