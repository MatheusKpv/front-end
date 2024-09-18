import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroModuloComponent } from './primeiro-modulo.component';

describe('PrimeiroModuloComponent', () => {
  let component: PrimeiroModuloComponent;
  let fixture: ComponentFixture<PrimeiroModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimeiroModuloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimeiroModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
