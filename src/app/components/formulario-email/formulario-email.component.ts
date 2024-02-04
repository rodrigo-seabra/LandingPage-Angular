import { Component, signal, ElementRef, OnInit } from '@angular/core';
import { ContactBtnComponent } from '../contact-btn/contact-btn.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FormService } from '../../services/form.service';
import { ScrollService } from '../../services/scroll.service';

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

  constructor(
    private service: FormService,
    private scrollService: ScrollService,
    private elementRef: ElementRef
  ) {
    this.FormularioEmailComponent = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit() {
    this.scrollService.scrollToDiv$.subscribe((divId) => {
      const element = document.getElementById(divId);
      if (element) {
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const elementHeight = element.offsetHeight;

        const offset = Math.max(0, (windowHeight - elementHeight) / 2);
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        });
      }
    });
  }
  onSubmit() {
    const emailModel = {
      To: this.FormularioEmailComponent.value.email,
      Subject: 'Hello from the Email API',
      Body: `Olá ${this.FormularioEmailComponent.value.name}`,
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
