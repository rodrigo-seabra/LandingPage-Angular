import { Component, signal } from '@angular/core';
import { ContactBtnComponent } from '../contact-btn/contact-btn.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FormService } from '../../services/form.service';

@Component({
  selector: 'formulario-email',
  standalone: true,
  imports: [ContactBtnComponent, ReactiveFormsModule],
  providers: [FormService],
  templateUrl: './formulario-email.component.html',
  styleUrl: './formulario-email.component.css',
})
//modulo de forms reativos - reactive forms
export class FormularioEmailComponent {
  FormularioEmailComponent!: FormGroup;
  loading = signal(false);

  constructor(private service: FormService) {
    this.FormularioEmailComponent = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    const emailModel = {
      To: 'rodrigo.seabra08@outlook.com',
      Subject: 'Hello from the Email API',
      Body: 'Vai se fuder',
    };
    const jsonString = JSON.stringify(emailModel);
    console.log(jsonString);

    this.service.enviarEmail(emailModel).subscribe(
      (service) => {
        console.log('Email enviado com sucesso:');
      },
      (error) => {
        console.error('Erro ao enviar o e-mail:', error);
      }
    );
  }
}
