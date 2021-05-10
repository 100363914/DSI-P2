import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MapaComponent } from './mapa/mapa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatosComponent } from './datos/datos.component';
import { AnterioresComponent } from './anteriores/anteriores.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapaComponent,
    DatosComponent,
    AnterioresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyAroQVcQpJIvfMLScn882kcw43PVsrWDjM'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
