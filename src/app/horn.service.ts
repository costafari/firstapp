import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HornService {

  private endpoint: string = 'https://firstapp-7hjb.onrender.com/';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient,
  ) { }

  getAllObjects(url: String): Observable<any[]> {
    return this.http.get<any[]>(this.endpoint + url);
  }

}
