import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private localStorageService: LocalstorageService) { }
  
  isAuthenticated() {
  
    const token = this.localStorageService.getToken() !== null;
    
    if (token) {
      return true;
    }
      return false;
    }

}
