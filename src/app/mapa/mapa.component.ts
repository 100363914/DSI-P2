import { Component } from '@angular/core';
import { Marcador } from '../marcador';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent{

  marcadores : Marcador[] = [];

  lat = 40.3323301097863;
  lng = -3.765302686333248;
  zoom = 15;

  constructor( ) { 
    if( localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores')|| '{}');
    }
  }


  agregarMarcador( evento:any ){

    const coords: { lat: number, lng: number } = evento.coords;

    const nuevoMarcador = new Marcador( coords.lat, coords.lng);

    this.marcadores.push( nuevoMarcador );
    
    this.guardarStorage()
  }

  guardarStorage(){

    localStorage.setItem('marcadores', JSON.stringify( this.marcadores ));
  }
}
