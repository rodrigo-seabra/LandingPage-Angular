import { Component, ElementRef, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactBtnComponent } from '../contact-btn/contact-btn.component';
import { ScrollService } from '../../services/scroll.service';
import { FormContactService } from '../../services/form-contact.service';

@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [ContactBtnComponent, ReactiveFormsModule],
  providers: [FormContactService],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.css',
})
export class FormContactComponent {
  formContact!: FormGroup;
  loading = signal(false);

  constructor(
    private service: FormContactService,
    private scrollService: ScrollService,
    private elementRef: ElementRef
  ) {
    this.formContact = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      request: new FormControl('', [Validators.required]),
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
    const Request = {
      name: this.formContact.value.name,
      email: this.formContact.value.email,
      request: this.formContact.value.request,
    };
    this.loading.set(true);
    this.service.request(Request).subscribe({
      next: () => {
        console.log('DEU BOM PORA');
        this.formContact.reset();
        this.loading.set(false);
      },
    });
  }
}
