import { Component, OnInit } from '@angular/core';
import { CarouselModule } from '@coreui/angular';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {

  slides: any[] = new Array(3).fill({id: 0, src: './image-main.png', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: './image-main.png',
    };
    this.slides[1] = {
      src: './image-main.png',
    }
    this.slides[2] = {
      src: './image-main.png',
    }
  }
}
