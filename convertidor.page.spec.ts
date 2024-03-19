import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConvertidorPage } from './convertidor.page';

describe('ConvertidorPage', () => {
  let component: ConvertidorPage;
  let fixture: ComponentFixture<ConvertidorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConvertidorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
