import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioEdumindPage } from './formulario-edumind.page';

describe('FormularioEdumindPage', () => {
  let component: FormularioEdumindPage;
  let fixture: ComponentFixture<FormularioEdumindPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEdumindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
