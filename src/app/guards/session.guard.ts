import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

	constructor(private router:Router){}

	canActivate(
	    next: ActivatedRouteSnapshot,
	    state: RouterStateSnapshot){
	  	if (localStorage.getItem("SessionToken")) {
	  		return true;
	  	}

	  	this.router.navigate(['/iniciar_sesion']);
	    return false;
	}
}
