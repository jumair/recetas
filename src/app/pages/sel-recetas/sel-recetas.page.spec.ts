import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelRecetasPage } from './sel-recetas.page';

describe('SelRecetasPage', () => {
  let component: SelRecetasPage;
  let fixture: ComponentFixture<SelRecetasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelRecetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
