import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private URL:string = "https://remoteok.com/api";



  constructor(private http: HttpClient) {}

  getShows(): Observable<any[]>{
    return this.http.get<any[]>(`${this.URL}`);
  }

  getShowbyId(id: number): Observable<any[]>{
    return this.http.get<any[]>(`${this.URL}/${id}`)
  }

}
