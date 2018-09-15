import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './../services/articulos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-articulo',
  templateUrl: './mostrar-articulo.component.html',
  styleUrls: ['./mostrar-articulo.component.css']
})
export class MostrarArticuloComponent implements OnInit {

	articulo:any;

  constructor(
  	private _articulosServices:ArticulosService,
  	private _ruta:ActivatedRoute
  	) { 
  		this.articulo={
  			titulo:"",
  			contenido:""
  		};
  	}

  ngOnInit() {
  	this._ruta.params.
  		subscribe(respuesta=>{
  			this._articulosServices.
  				mostrarArticulo(respuesta['id']).
  					subscribe(respuestaArticulo=>{
  						this.articulo=respuestaArticulo;
  					},errorArticulo=>{
  						console.log(errorArticulo);
  					});
  		},error=>{
  			console.log(error);
  		});
  }

}
