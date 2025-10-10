import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendedBox } from './recomended-box';

describe('RecomendedBox', () => {
  let component: RecomendedBox;
  let fixture: ComponentFixture<RecomendedBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecomendedBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecomendedBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
