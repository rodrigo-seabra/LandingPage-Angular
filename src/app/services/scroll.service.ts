import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scrollToDivSource = new Subject<string>();

  scrollToDiv$ = this.scrollToDivSource.asObservable();

  scrollToDiv(divId: string) {
    this.scrollToDivSource.next(divId);
  }
}
