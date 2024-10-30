

import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError,  } from "rxjs";
import { LocalstorageService } from "../services/baseService/Localstorage.service";


export class  jwtInterceptor implements HttpInterceptor{
  router: any; 
  constructor(private localStorage: LocalstorageService){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq: any;
    const token : string | null = this.localStorage.getToken();
    if(token){
      authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

    }
    return next.handle(authReq).pipe(
      catchError((err: HttpErrorResponse) => {
        if(err.status === 401 || err.status === 403 || (err.status === 400 && err.error.codeError === "INSUFFICIENT_AUTHENTICATION")){
          this.localStorage.destroyToken();
          this.router.navigate(["/login"]);
        }
        return throwError(() => new Error(err.error.message || err.message))
      })
    )


  }
}