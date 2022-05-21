import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { SharedComponentsModule } from '../components/shared-components.module';
import { SwiperModule } from 'swiper/angular';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { HighchartsChartModule } from 'highcharts-angular';




import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedComponentsModule,
    SwiperModule,
    NgxPageScrollModule,
    HighchartsChartModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
