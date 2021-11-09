import { Component, OnInit } from '@angular/core';
import {arregloRegiones} from '../../interfaces/regiones';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventana-inicial',
  templateUrl: './ventana-inicial.component.html',
  styleUrls: ['./ventana-inicial.component.scss']
})
export class VentanaInicialComponent implements OnInit {

  arregloDeRegiones:any = arregloRegiones;
  
  constructor(private router:Router) {

   }

  ngOnInit(): void {
  }

  llevarAFormulario(){
    this.router.navigate(['/cambiarDia']);
  }

  cambiarFarenheit(){
    let j:number = 1;
    let a:number = 0;
    for(let i = 0; i < this.arregloDeRegiones.length; i++)
    {
        for(let j = 0; j < this.arregloDeRegiones[i].dias.length; j++)
        {
          console.log(this.arregloDeRegiones[i].dias[j].temperatura);
            this.arregloDeRegiones[i].dias[j].temperatura = Math.round((this.arregloDeRegiones[i].dias[j].temperatura*1.8)+32);
        }
    }
  }

  desactivarF(){
    let boton:any = document.getElementById("Fahrenheit");
    boton.disabled = true;
    boton.style.color = "red";

    let boton1:any = document.getElementById("Celcius");
    boton1.disabled = false;
    boton1.style.color ="grey";
    
    
  }

  desactivarC(){
    let boton:any = document.getElementById("Fahrenheit");
    boton.disabled = false;
    boton.style.color ="grey";

    let boton1:any = document.getElementById("Celcius");
    boton1.disabled = true;
    boton1.style.color = "red";
  }

  cambiarCelcius(){
    

    for(let i = 0; i < this.arregloDeRegiones.length; i++)
    {
        for(let j = 0; j < this.arregloDeRegiones[i].dias.length; j++)
        {
            this.arregloDeRegiones[i].dias[j].temperatura = Math.round((this.arregloDeRegiones[i].dias[j].temperatura-32)/1.8);
            

        }
    }
  }

}
