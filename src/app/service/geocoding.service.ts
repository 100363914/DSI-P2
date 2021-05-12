import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url ="https://maps.googleapis.com/maps/api/geocode/json?";
@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  constructor(private http:HttpClient) { }

  consulta(busqueda: String){
    busqueda=busqueda.replace(" ","+");
    return this.http.get(`${url}address=${busqueda}&key=AIzaSyAroQVcQpJIvfMLScn882kcw43PVsrWDjM`);
    }
}
