import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

	url:string;
	encabezados:any;

  	constructor(private http:HttpClient) { 
  		this.url="https://apidocumentospiensadigital.herokuapp.com/articulos";
  		this.encabezados={
  			headers: new HttpHeaders({
  				'Content-Type':'application/json',
  				'Authorization': 'Bearer ' + localStorage.getItem("SessionToken")
  			})
  		};
  	}

  	/*GET index*/
  	traerArticulos():Observable<any>{
  		return this.http.get<any>(this.url,this.encabezados);
  	}

  	/*GET show*/
  	mostrarArticulo(id):Observable<any>{
      return this.http.get<any>(this.url+'/'+id,this.encabezados);
  	}

  	/*POST create*/
  	crearArticulo(articulo){

  	}

  	/*PUT update*/
  	modificarArticulo(articulo){

  	}

  	/*DELETE destroy*/
  	eliminarArticulo(id):Observable<any>{
      let urlArticulo=this.url+"/"+id;
      return this.http.delete<any>(urlArticulo,this.encabezados);
  	}
}
