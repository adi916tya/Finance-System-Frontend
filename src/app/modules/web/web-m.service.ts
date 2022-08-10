import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WebMService {
url="localhost:8085/register"
  constructor(private http: HttpClient) { }
registration(regD:any):Observable<any>{
  return this.http.post(this.url, regD);
}
login(loginres:any):Observable<any>{
  return this.http.post(this.url, loginres);
}
}