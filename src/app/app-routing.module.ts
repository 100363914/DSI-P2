import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnterioresComponent } from './anteriores/anteriores.component';
import { DatosComponent } from './datos/datos.component';
import { MapaComponent } from './mapa/mapa.component';

const routes: Routes = [
    {path:"",component:MapaComponent},
    {path:"mapa",component:MapaComponent},
    {path:"datos",component:DatosComponent},
    {path:"anteriores",component:AnterioresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
