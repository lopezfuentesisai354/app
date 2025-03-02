import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MusicaEdumindPage } from './musica-edumind.page';

describe('MusicaEdumindPage', () => {
  let component: MusicaEdumindPage;
  let fixture: ComponentFixture<MusicaEdumindPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicaEdumindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
