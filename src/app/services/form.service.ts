import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormResponse } from '../components/interfaces/Form.interface';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private endpointUrl = 'urlbakcend';

  constructor(private http: HttpClient) {}

  sendData(name: string, email: string): Observable<FormResponse> {
    const data = { name, email };
    return this.http.post<FormResponse>(this.endpointUrl, data);
  }
}
