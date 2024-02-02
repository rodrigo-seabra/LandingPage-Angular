import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEmailComponent } from './formulario-email.component';

describe('FormularioEmailComponent', () => {
  let component: FormularioEmailComponent;
  let fixture: ComponentFixture<FormularioEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
