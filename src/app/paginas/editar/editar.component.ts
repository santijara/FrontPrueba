import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpresaservicesService } from 'src/app/servicios/empresaservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaModel } from '../../modelos/empresa.model';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  empresa: EmpresaModel = new EmpresaModel;
  forma: FormGroup;
  id:number;
  constructor( private servicio: EmpresaservicesService,
               private fb: FormBuilder,
               private aroute: ActivatedRoute,
               private router: Router) { 

                this.id = +this.aroute.snapshot.paramMap.get('id');

                this.forma = this.fb.group({
                 
                  nombre: ['',[Validators.required]],
                  direccion: ['',[Validators.required]]
                })
               }

  ngOnInit(): void {

    this.servicio.GetID(this.id).subscribe(data=>{
     this.empresa= data;
      this.forma.setValue({
        
        'nombre': this.empresa.nombreempresa,
        'direccion': this.empresa.direccion
      })
    })
 
  }

  actualizar(){

    const dato: EmpresaModel ={
      nombreempresa: this.forma.get('nombre')?.value,
      direccion: this.forma.get('direccion')?.value,
    }

    this.servicio.Put(this.id, dato).subscribe(data=>{
      this.router.navigateByUrl('/home');
    })
  }

}
