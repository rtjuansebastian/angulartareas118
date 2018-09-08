import { Component, OnInit } from '@angular/core';
import {ArticulosService} from './../services/articulos.service';

@Component({
  selector: 'app-traer-articulos',
  templateUrl: './traer-articulos.component.html',
  styleUrls: ['./traer-articulos.component.css']
})
export class TraerArticulosComponent implements OnInit {

	articulos:Array<any>;

  	constructor(private _articulos:ArticulosService) { 

  		this.articulos=[{
  			id:"",
  			titulo:"",
  			contenido:""
  		}];
  	}

  	ngOnInit() {
  		this.traerArticulos();
  	}

  	traerArticulos(){
  		this._articulos.
  			traerArticulos().
  			subscribe(respuestaArticulos=>{
  				this.articulos=respuestaArticulos;
  			},error=>{
  				console.log(error);
  			});
  	}

  	eliminarArticulo(id){

  		let confirmacion=confirm("Estas seguro?");
  		if(confirmacion){
			this._articulos.
	  			eliminarArticulo(id).
	  			subscribe(respuesta=>{
	  				this.traerArticulos();
	  			},error=>{
	  				console.log(error);
	  			});
  		}

  	}

}
