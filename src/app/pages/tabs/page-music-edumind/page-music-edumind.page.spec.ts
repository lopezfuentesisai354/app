import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageMusicEdumindPage } from './page-music-edumind.page';

describe('PageMusicEdumindPage', () => {
  let component: PageMusicEdumindPage;
  let fixture: ComponentFixture<PageMusicEdumindPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMusicEdumindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
