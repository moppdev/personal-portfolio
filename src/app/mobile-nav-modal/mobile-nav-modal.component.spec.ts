import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavModalComponent } from './mobile-nav-modal.component';

describe('MobileNavModalComponent', () => {
  let component: MobileNavModalComponent;
  let fixture: ComponentFixture<MobileNavModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileNavModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileNavModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
