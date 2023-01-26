import { Component, OnInit } from '@angular/core';
import { EmpresaModel } from '../../modelos/empresa.model';
import { EmpresaservicesService } from '../../servicios/empresaservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empresa: EmpresaModel[] = [];
  constructor(private servicio: EmpresaservicesService) { }

  ngOnInit(): void {

    this.Get();
  }


  Get(){
    this.servicio.Get().subscribe(data=>{
      console.log(data);
      this.empresa = data;
    })
  }

  eliminar(id:any){

    this.servicio.Delete(id).subscribe(data=>{
      console.log('Registro Eliminado');
      this.Get();
    })
  }

}
