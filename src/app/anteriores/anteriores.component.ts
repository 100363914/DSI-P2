import { Component, OnInit } from '@angular/core';
import { Marcador } from '../marcador';

@Component({
  selector: 'app-anteriores',
  templateUrl: './anteriores.component.html',
  styleUrls: ['./anteriores.component.scss']
})
export class AnterioresComponent implements OnInit {

    marcadores : Marcador[] = [];
    
    constructor( ) { 
        if( localStorage.getItem('marcadores')){
          this.marcadores = JSON.parse(localStorage.getItem('marcadores')|| '{}');
        }
      }

  ngOnInit(): void {
  }
    borrar(index: number){
        this.marcadores.splice(index,1);
        this.guardarStorage();
    }
    guardarStorage(){

        localStorage.setItem('marcadores', JSON.stringify( this.marcadores ));
      }
}
