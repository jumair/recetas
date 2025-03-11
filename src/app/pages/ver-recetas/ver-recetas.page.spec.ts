import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerRecetasPage } from './ver-recetas.page';

describe('VerRecetasPage', () => {
  let component: VerRecetasPage;
  let fixture: ComponentFixture<VerRecetasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerRecetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
