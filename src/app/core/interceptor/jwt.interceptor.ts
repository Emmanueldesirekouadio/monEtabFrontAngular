import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { LocalStorageService } from "../services/localStorage.service";
import { Router } from "@angular/router";


export class JwtInterceptor implements HttpInterceptor{
  constructor(private localStorage: LocalStorageService, private router: Router){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string | null = this.localStorage.getToken();
    let authReq: any;
    if(token){
      authReq = request.clone({
        setHeaders: { Authorization: `Bearer ${JSON.stringify(token)}` }  // ajoute le header Authorization avec le token
      })
    } //clone permet de modifier le requete(le header)
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === 401 || error.status === 403 ||(error.status === 400 && error.error.codeError === "INSUFFICIENT_AUTHENTICATION")) {
          this.localStorage.destroyToken();
          this.router.navigate(['/login']);
        }
        return throwError(()=> new Error(error.error.message || error.message))
      })
    )
  }

}
