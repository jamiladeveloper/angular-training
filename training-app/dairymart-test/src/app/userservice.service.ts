import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  userid : any;

  constructor(private cookieService: CookieService) { 
    this.userid = '';
  }

  isLoggedIn() : boolean {
    this.userid = this.cookieService.get('dairymart-userid');
    if(this.userid != '') {
      return true;
    }
    else return false;
  }

  setLogin() {
    this.cookieService.set('dairymart-userid', this.userid);
  }

}
