import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSuccessCardComponent } from './error-success-card.component';

describe('ErrorSuccessCardComponent', () => {
  let component: ErrorSuccessCardComponent;
  let fixture: ComponentFixture<ErrorSuccessCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorSuccessCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorSuccessCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
