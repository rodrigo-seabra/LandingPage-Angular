import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { ContactBtnComponent } from '../contact-btn/contact-btn.component';

@Component({
  selector: 'app-home', // como referenciar esse componente em outro componente
  standalone: true, //componente sozinho sem pertencer a um modulo
  imports: [HeaderComponent, NgOptimizedImage, ContactBtnComponent], // as coisas que o componente vai precisar usar - componente e services do angular
  providers: [],
  templateUrl: './home.component.html', //  indica onde o html desse componente
  styleUrl: './home.component.css', // indica onde esta o css desse componente
})
export class HomeComponent {}
