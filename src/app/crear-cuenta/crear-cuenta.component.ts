import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

	formulario:any;

  	constructor(
  		private _usuarios:UsuariosService, 
  		private router:Router
  	) {

  		this.formulario={
  			user:{
  				name:"",
  				email:"",
  				password:"",
  				password_confirmation:""
  			}
  		} 

  	}

  	ngOnInit() {
  	}

    crearCuenta(){
      this._usuarios.
        crearCuenta(this.formulario).
        subscribe(respuesta=>{
          let autenticacion={
            auth:{
              email:this.formulario.user.email,
              password:this.formulario.user.password
            }
          }
          this._usuarios.
            iniciarSesion(autenticacion).
            subscribe(respuesta=>{
              localStorage.setItem("SessionToken",respuesta.jwt);
              this.router.navigate(['/']);  
            },error=>{
              console.log(error);
            });
          
        },error=>{
          console.log(error);
        });
    }

}
