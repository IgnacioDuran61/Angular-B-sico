import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador/contador.module';

import { HeroesModule } from './Heroes/heroes.module';



@NgModule({
  declarations: [ //declaro mis componentes
    AppComponent
  ],
  imports: [ //otros modulos 
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [], //servicios especif a modulos
  bootstrap: [AppComponent] // modulos principales
})

export class AppModule { 

}
