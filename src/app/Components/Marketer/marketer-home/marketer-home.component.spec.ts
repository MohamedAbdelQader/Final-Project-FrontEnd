import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketerHomeComponent } from './marketer-home.component';

describe('MarketerHomeComponent', () => {
  let component: MarketerHomeComponent;
  let fixture: ComponentFixture<MarketerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketerHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
