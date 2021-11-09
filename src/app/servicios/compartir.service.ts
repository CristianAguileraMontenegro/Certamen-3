import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompartirService {
  region:any
  constructor() { }

  setRegion(datos:any){
    this.region = datos;

  }

  getRegion(){
    return this.region;
  }
}
