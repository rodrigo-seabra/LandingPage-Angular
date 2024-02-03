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
      To: this.FormularioEmailComponent.value.email,
      Subject: 'Hello from the Email API',
      Body: 'Vai se fuder',
    };
    this.loading.set(true);
    this.service.enviarEmail(emailModel).subscribe({
      next: () => {
        console.log('Email enviado com sucesso:');
        this.FormularioEmailComponent.reset();
        this.loading.set(false);
      },
    });
  }
}
