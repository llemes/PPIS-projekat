import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable()
export class RouteGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    // decode the token to get its payload

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.auth.token);
    return (decodedToken.ulogaId == expectedRole);

    }
}