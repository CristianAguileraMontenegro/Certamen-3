import { Component, OnInit } from '@angular/core';
import {arregloRegiones} from '../../interfaces/regiones';
import {CompartirService} from '../../servicios/compartir.service';
 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nombreRegionActual:any;
  arregloDeRegiones:any = arregloRegiones;

  constructor(private compartido:CompartirService) { }

  ngOnInit(): void {

  }

  retornarNombre():string{
    return this.nombreRegionActual = this.compartido.getRegion();
  }

  
}
