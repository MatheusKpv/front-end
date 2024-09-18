import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroModuloRoteamentoComponent } from './primeiro-modulo-roteamento.component';

describe('PrimeiroModuloRoteamentoComponent', () => {
  let component: PrimeiroModuloRoteamentoComponent;
  let fixture: ComponentFixture<PrimeiroModuloRoteamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimeiroModuloRoteamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimeiroModuloRoteamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
