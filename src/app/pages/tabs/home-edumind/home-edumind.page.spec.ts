import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeEdumindPage } from './home-edumind.page';

describe('HomeEdumindPage', () => {
  let component: HomeEdumindPage;
  let fixture: ComponentFixture<HomeEdumindPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEdumindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
