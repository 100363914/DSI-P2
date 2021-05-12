import { Component, OnInit } from '@angular/core';
import { GeocodingService } from 'src/app/service/geocoding.service';
import { FormGroup ,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    busqueda = new FormGroup({
        barra: new FormControl("",Validators.required),
      });
  constructor(private coordenadas: GeocodingService) { }

  ngOnInit(): void {
  }
 buscar(){
    console.log(this.busqueda.value.barra)
     this.coordenadas.consulta(this.busqueda.value.barra).subscribe( resp =>
        console.log(resp)
     )
 }

}
