import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoModuloComponent } from './segundo-modulo.component';

describe('SegundoModuloComponent', () => {
  let component: SegundoModuloComponent;
  let fixture: ComponentFixture<SegundoModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SegundoModuloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegundoModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
