import { retryWhen } from 'rxjs/operator/retryWhen';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieGuardService implements CanActivate {

  constructor() { }


    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean> | Promise<boolean> | boolean {
        return route.params.versie === '1';
    }
}
