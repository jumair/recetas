import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerIngredientesPage } from './ver-ingredientes.page';

describe('VerIngredientesPage', () => {
  let component: VerIngredientesPage;
  let fixture: ComponentFixture<VerIngredientesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerIngredientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
