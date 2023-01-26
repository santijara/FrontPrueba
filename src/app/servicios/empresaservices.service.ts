import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpresaModel } from '../modelos/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaservicesService {

  private Api = 'https://localhost:7130/api/Empresa/'
  constructor(private http: HttpClient) { }

  Get():Observable<any>{

    return this.http.get(this.Api);
  }

  GetID(id:any):Observable<any>{

    return this.http.get(this.Api + id);
  }

  Post(empresa: EmpresaModel):Observable<any>{
    
    return this.http.post(this.Api, empresa);
  }

  Delete(id:any):Observable<any>{

    return this.http.delete(this.Api + id);
  }

  Put(id:any, empresa:EmpresaModel):Observable<any>{

    return this.http.put(this.Api + id, empresa);
  }
}
