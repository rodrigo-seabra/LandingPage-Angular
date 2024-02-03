import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { ContactBtnComponent } from '../contact-btn/contact-btn.component';
import { FormularioEmailComponent } from '../formulario-email/formulario-email.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home', // como referenciar esse componente em outro componente
  standalone: true, //componente sozinho sem pertencer a um modulo
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    ContactBtnComponent,
    FormularioEmailComponent,
    MatIconModule,
    FormsModule,
    FooterComponent,
  ], // as coisas que o componente vai precisar usar - componente e services do angular
  providers: [],
  templateUrl: './home.component.html', //  indica onde o html desse componente
  styleUrl: './home.component.css', // indica onde esta o css desse componente
})
export class HomeComponent {}
