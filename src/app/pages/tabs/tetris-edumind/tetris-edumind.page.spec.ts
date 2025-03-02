import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TetrisEdumindPage } from './tetris-edumind.page';

describe('TetrisEdumindPage', () => {
  let component: TetrisEdumindPage;
  let fixture: ComponentFixture<TetrisEdumindPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TetrisEdumindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
