import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdexComponent } from './pdex/pdex.component';
import { PokeDescriptionComponent } from './pdex/poke-description/poke-description.component';

@NgModule({
  declarations: [
    AppComponent,
    PdexComponent,
    PokeDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
