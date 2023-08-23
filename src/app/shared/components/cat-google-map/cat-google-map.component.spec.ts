import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatGoogleMapComponent } from './cat-google-map.component';

describe('CatGoogleMapComponent', () => {
  let component: CatGoogleMapComponent;
  let fixture: ComponentFixture<CatGoogleMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatGoogleMapComponent]
    });
    fixture = TestBed.createComponent(CatGoogleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
