import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms'//para ocupar validatos
import {arregloRegiones} from '../../interfaces/regiones';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  arregloDeRegiones:any = arregloRegiones;
  formulario:FormGroup;

  constructor(public FormB:FormBuilder,private router:Router){
      this.formulario=FormB.group({
        regiones:["",[Validators.required]],
        clima:["",Validators.required],
        dia:["", Validators.required],
        temperatura:["", [Validators.required]],
        grados:["",Validators.required]
    })
   }

  ngOnInit(): void {
  }

  validacion(){
    let radioCheck:any = document.getElementsByClassName("form-check-input grados");
    let valorTemperatura:any = document.getElementById("temperatura");
    for(let i = 0; i < radioCheck.length; i++){
        if(radioCheck[i].checked && i == 1)
        {
          valorTemperatura.value =  Math.round((valorTemperatura.value-32)/1.8);
        }
    }


    let regionSeleccionada:any = (<HTMLSelectElement>document.getElementById('regiones')).value;//obtenes el valor seleccionado del pais
    let diaSeleccionada:any = (<HTMLSelectElement>document.getElementById('dia')).value;//obtenes el valor seleccionado del pais
    let radioChecked:any = document.getElementsByClassName("form-check-input clima");

    for(let i = 0; i < this.arregloDeRegiones.length; i++)
    {
      if( this.arregloDeRegiones[i].nombreRegion == regionSeleccionada)
      {
       
        for(let j = 0; j < this.arregloDeRegiones[i].dias.length; j++)
        {
         
          if(this.arregloDeRegiones[i].dias[j].nombreDia ==  diaSeleccionada)
          {


            this.arregloDeRegiones[i].dias[j].temperatura = valorTemperatura.value;
            
            for(let k = 0; k < radioChecked.length; k++)
            {
                if(radioChecked[k].checked)
                {
                  this.arregloDeRegiones[i].dias[j].estadoClima = radioChecked[k].value;
                }
            } 
          }
        }
      } 
    }


    this.router.navigate(['/inicio']);






  }
  

}
