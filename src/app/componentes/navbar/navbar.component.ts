import { Component, OnInit } from '@angular/core';
import {arregloRegiones} from '../../interfaces/regiones';
import {CompartirService} from '../../servicios/compartir.service'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  arregloDeRegiones:any = arregloRegiones;
 
  constructor(private compartir:CompartirService) { }

  ngOnInit(): void {
  }

  ubicarRegion(navActual:any){
    this.compartir.setRegion(navActual.nombreRegion);
  }

}
