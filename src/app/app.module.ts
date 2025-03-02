import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './component/side-menu/side-menu.component';


@NgModule({

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [  
    AppComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),  
    AppRoutingModule,       
    FormsModule,            
    ReactiveFormsModule,
    FooterComponent, 
    SideMenuComponent,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
