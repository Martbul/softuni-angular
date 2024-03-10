import { Injectable, Provider } from "@angular/core";
import{HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, catchError, mergeMap, tap } from "rxjs";
import  { environment } from '../environments/environment'
const apiUrl = environment.apiUrl
@Injectable()
export class AppInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let request = req
      if(req.url.startsWith("/api")){
        request = req.clone({
            url:req.url.replace('/api', apiUrl),
        })
      }
        return next.handle(request).pipe(
            tap((req) =>{
                if(req instanceof HttpResponse) {console.log(req.body);
                }
            }),
            catchError(err=>{
                if(err.status==0){
                    console.log('UNKNOWN ERROR');
                    return []
                }

                return [err]
            })
        )
    }
}export const appInterceptorProvider:Provider={
    provide: HTTP_INTERCEPTORS,
     useClass:AppInterceptor,
     multi:true
}