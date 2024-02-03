import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormResponse } from '../interfaces/Form.interface';
import { FormularioEmailComponent } from '../components/formulario-email/formulario-email.component';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private apiUrl = 'https://localhost:7274/email'; // Substitua pela URL real da sua API

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  enviarEmail(emailModel: any): Observable<FormResponse> {
    return this.http.post<FormResponse>(this.apiUrl, emailModel);
  }
}
