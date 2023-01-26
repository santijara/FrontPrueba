import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresaModel } from '../../modelos/empresa.model';
import { EmpresaservicesService } from '../../servicios/empresaservices.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  empresa: EmpresaModel = new EmpresaModel;
  id:number;
  constructor( private servicio: EmpresaservicesService,
               private aroute: ActivatedRoute) {

this.id = +this.aroute.snapshot.paramMap.get('id');
console.log('Este', this.id);
                }

  ngOnInit(): void {

    this.GetID();
  }

  GetID(){
    this.servicio.GetID(this.id).subscribe(data=>{
      this.empresa = data;
      console.log('info',data);
    })
  }

}
