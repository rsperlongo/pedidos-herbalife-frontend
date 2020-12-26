import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flavours } from '../models/flavours';

@Injectable({
  providedIn: 'root'
})
export class FlavoursService {

  private apiUrl = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getFlavour(): Observable<Flavours[]> {
    return this.http.get<Flavours[]>(`${this.apiUrl}/flavours`);
  }
}
