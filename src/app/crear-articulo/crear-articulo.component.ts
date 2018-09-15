import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './../services/articulos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css']
})
export class CrearArticuloComponent implements OnInit {

	articulo:any;

  constructor(private _articulosService:ArticulosService,
  	private _router:Router) { 
  	this.articulo={
  		titulo:"",
  		contenido:""
  	}
  }

  ngOnInit() {
  }

  crearArticulo(){
  	this._articulosService.
  		crearArticulo(this.articulo).
		subscribe(respuesta=>{
			this._router.navigate(['/mostrar_articulo',respuesta.id]);
		},error=>{
			console.log(error);
		});
  }

}
