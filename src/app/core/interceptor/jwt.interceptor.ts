

import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError,  } from "rxjs";
import { LocalstorageService } from "../services/baseService/Localstorage.service";


export function jwtInterceptor(localStorage: LocalstorageService, router: any): HttpInterceptor {
    return {
        intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            let authReq: any;
            const token: string | null = localStorage.getToken();
            if (token) {
                authReq = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${token}`
                    }
                });
            }
            return next.handle(authReq).pipe(
                catchError((err: HttpErrorResponse) => {
                    if (err.status === 401 || err.status === 403 || (err.status === 400 && err.error.codeError === "INSUFFICIENT_AUTHENTICATION")) {
                        localStorage.destroyToken();
                        router.navigate(["/login"]);
                    }
                    return throwError(() => new Error(err.error.message || err.message));
                })
            );
        }
    };
}
