import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PeopleManifestPopUpComponent } from './people-manifest-pop-up/people-manifest-pop-up.component';
import { FooterComponent } from './footer/footer.component';
import { TheraqueServicesComponent } from './theraque-services/theraque-services.component';



@NgModule({
  declarations: [HeaderComponent, PeopleManifestPopUpComponent,FooterComponent, TheraqueServicesComponent ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports: [HeaderComponent, PeopleManifestPopUpComponent,FooterComponent, TheraqueServicesComponent]
})
export class SharedComponentsModule { }
