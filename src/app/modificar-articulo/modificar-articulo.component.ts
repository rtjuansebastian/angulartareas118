import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './../services/articulos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-articulo',
  templateUrl: './modificar-articulo.component.html',
  styleUrls: ['./modificar-articulo.component.css']
})
export class ModificarArticuloComponent implements OnInit {

	articulo:any;

  	constructor(private _articulosService:ArticulosService,
  		private _ruta:ActivatedRoute,
  		private _router:Router) { 

  		this.articulo={
  			id:"",
  			titulo:"",
  			contenido:""
  		}
  	}

	ngOnInit() {
		this._ruta.params.subscribe(respuesta=>{
			this._articulosService.
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

	modificarArticulo(){
		this._articulosService.
			modificarArticulo(this.articulo).
			subscribe(respuesta=>{
				this._router.
					navigate(['/mostrar_articulo',respuesta['id']]);
			},error=>{
				console.log(error);
			});
	}

}
