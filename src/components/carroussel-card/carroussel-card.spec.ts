import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrousselCard } from './carroussel-card';

describe('CarrousselCard', () => {
  let component: CarrousselCard;
  let fixture: ComponentFixture<CarrousselCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrousselCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrousselCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
