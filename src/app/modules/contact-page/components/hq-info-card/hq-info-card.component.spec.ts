import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HQInfoCardComponent } from './hq-info-card.component';

describe('HQInfoCardComponent', () => {
  let component: HQInfoCardComponent;
  let fixture: ComponentFixture<HQInfoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HQInfoCardComponent]
    });
    fixture = TestBed.createComponent(HQInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
