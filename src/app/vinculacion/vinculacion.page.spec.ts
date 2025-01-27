import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VinculacionPage } from './vinculacion.page';

describe('VinculacionPage', () => {
  let component: VinculacionPage;
  let fixture: ComponentFixture<VinculacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
