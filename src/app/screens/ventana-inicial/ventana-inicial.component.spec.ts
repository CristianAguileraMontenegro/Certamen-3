import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaInicialComponent } from './ventana-inicial.component';

describe('VentanaInicialComponent', () => {
  let component: VentanaInicialComponent;
  let fixture: ComponentFixture<VentanaInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaInicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
