import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListGamesEdumindPage } from './list-games-edumind.page';

describe('ListGamesEdumindPage', () => {
  let component: ListGamesEdumindPage;
  let fixture: ComponentFixture<ListGamesEdumindPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGamesEdumindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
