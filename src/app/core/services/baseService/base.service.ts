import { Injectable } from '@angular/core';
import { environmentDev } from '../../../../environments/environment.dev';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, shareReplay, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private baseUrl: string = environmentDev.baseUrl;
  constructor(private http: HttpClient) { }

  private getHeader(){
    return new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    })
  }
  getOne(endPoint: string, id: number) {
    const url: string = `${this.baseUrl}/${endPoint}/${id}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  getAll(endPoint: string) {
    const url: string = `${this.baseUrl}/${endPoint}`;
    return this.http.get(url).pipe(shareReplay(1), catchError(this.handleError));
  }

  post(endPoint: string, data: any) {
    const url: string = `${this.baseUrl}/${endPoint}`;
    const header: HttpHeaders = this.getHeader()
    return this.http.post(url, data).pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    let errorMessage: string = 'Oups ! quelque chose a mal tourné.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      switch (error.status) {
        case 400: errorMessage = error.error.message;
        break;
        case 401: errorMessage = error.error.message;
        break;
        case 402: errorMessage = error.error.message;
        break;
        case 403: errorMessage = error.error.message;
        break;
        case 404: errorMessage = error.error.message;
        break;
        case 500: errorMessage = error.error.message;
        break;
        default: errorMessage = error.error.message;
        break;
      }
    }
    return throwError((): Error => new Error(errorMessage))
  }

}
