import { Component, signal } from '@angular/core';
import { ContactBtnComponent } from '../contact-btn/contact-btn.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
      email: new FormControl('', [Validators.required, Validators.email]), //validações
    });
  }

  onSubmit() {
    this.loading.set(true);
    if (this.FormularioEmailComponent.valid) {
      this.service
        .sendData(
          this.FormularioEmailComponent.value.name,
          this.FormularioEmailComponent.value.email
        )
        .subscribe({
          next: () => {
            this.FormularioEmailComponent.reset();
            this.loading.set(false);
          },
        });
    }
  }
}
