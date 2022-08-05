import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketerSignUpComponent } from './marketer-sign-up.component';

describe('MarketerSignUpComponent', () => {
  let component: MarketerSignUpComponent;
  let fixture: ComponentFixture<MarketerSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketerSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketerSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
