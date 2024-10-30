import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { LocalStorageService } from "../../services/localStorage.service";
import { Router } from "@angular/router";

export function jwtI(localStorage: LocalStorageService, router: Router) {
    return (request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> => {
        const token: string | null = localStorage.getToken();
        let authReq: any;
        if (token) {
            authReq = request.clone({
                setHeaders: { Authorization: `Bearer ${JSON.stringify(token)}` }
            });
        }
        return next.handle(authReq).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 || error.status === 403 || (error.status === 400 && error.error.codeError === "INSUFFICIENT_AUTHENTICATION")) {
                    localStorage.destroyToken();
                    router.navigate(['/login']);
                }
                return throwError(() => new Error(error.error.message || error.message));
            })
        );
    };
}
