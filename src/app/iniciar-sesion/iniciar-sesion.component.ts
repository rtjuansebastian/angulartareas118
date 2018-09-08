import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  	formulario:any;

  	errores:boolean;

  	constructor(
  		private _usuarios:UsuariosService, 
  		private router:Router
  		) {

  		this.formulario={
  			auth:{
  				email:"",
  				password:""
  			}
  		} 
  		this.errores=false;

  	}

  	ngOnInit() {
  	}

  	iniciarSesion(){
  		this._usuarios.
  			iniciarSesion(this.formulario).
  			subscribe(respuesta=>{
  				localStorage.setItem("SessionToken",respuesta.jwt);
  				this.router.navigate(['/']);
  				this.errores=false;
  			},error=>{
  				this.errores=true;
  				console.log(error);
  			});
  	}

}
