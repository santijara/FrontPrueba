import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpresaModel } from '../../modelos/empresa.model';
import { EmpresaservicesService } from '../../servicios/empresaservices.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  forma:FormGroup;

  constructor( private formbuilder: FormBuilder,
               private servicio: EmpresaservicesService,
               private router: Router) {

    this.forma = formbuilder.group({
      nombre: ['',[Validators.required]],
      direccion: ['',[Validators.required]]
    })
   }

  
  ngOnInit(): void {
  }

  agregar(){
    const dato: EmpresaModel ={
      nombreempresa: this.forma.get('nombre')?.value,
      direccion: this.forma.get('direccion')?.value,
    }

    this.servicio.Post(dato).subscribe(data=>{
      console.log(data);

      this.router.navigateByUrl('/home');

    })
  }

}
