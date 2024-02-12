import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormResponse } from '../interfaces/Form.interface';
import { FormularioEmailComponent } from '../components/formulario-email/formulario-email.component';

@Injectable({
  providedIn: 'root',
})
export class FormContactService {
  private apiUrl = 'https://127.0.0.1:7274/api/data'; // Substitua pela URL real da sua API

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  request(Request: any): Observable<FormResponse> {
    return this.http.post<FormResponse>(this.apiUrl, Request);
  }
}
