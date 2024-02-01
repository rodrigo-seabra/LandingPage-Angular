import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';

type BtnVariants = "primary" | "secondary"

@Component({
  selector: 'contact-btn',
  standalone: true,
  imports: [CommonModule], //para poder usar a diretiva ngIf
  templateUrl: './contact-btn.component.html',
  styleUrl: './contact-btn.component.css'
})
export class ContactBtnComponent {
  //declarando um imput (como as props)
  @Input("btn-text") btnText: string = ""
  @Output("submit") onSubmit = new EventEmitter();
  @Input() disabled:boolean = false;
  @Input() loading:boolean = false;
  //criando uma variante para o botão
  @Input() variant: BtnVariants = "primary"

  submit(){
    this.onSubmit.emit()
  }
}
