import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarioEdumindPage } from './calendario-edumind.page';

describe('CalendarioEdumindPage', () => {
  let component: CalendarioEdumindPage;
  let fixture: ComponentFixture<CalendarioEdumindPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioEdumindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
