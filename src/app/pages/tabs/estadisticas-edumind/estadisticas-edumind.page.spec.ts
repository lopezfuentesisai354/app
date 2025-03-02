import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadisticasEdumindPage } from './estadisticas-edumind.page';

describe('EstadisticasEdumindPage', () => {
  let component: EstadisticasEdumindPage;
  let fixture: ComponentFixture<EstadisticasEdumindPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasEdumindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
