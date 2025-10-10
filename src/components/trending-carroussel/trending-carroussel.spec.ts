import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingCarroussel } from './trending-carroussel';

describe('TrendingCarroussel', () => {
  let component: TrendingCarroussel;
  let fixture: ComponentFixture<TrendingCarroussel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingCarroussel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingCarroussel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
