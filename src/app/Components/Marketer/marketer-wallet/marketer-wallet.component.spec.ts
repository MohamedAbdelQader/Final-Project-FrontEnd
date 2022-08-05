import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketerWalletComponent } from './marketer-wallet.component';

describe('MarketerWalletComponent', () => {
  let component: MarketerWalletComponent;
  let fixture: ComponentFixture<MarketerWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketerWalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketerWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
