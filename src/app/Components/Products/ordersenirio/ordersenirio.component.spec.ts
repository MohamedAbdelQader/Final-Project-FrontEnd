import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersenirioComponent } from './ordersenirio.component';

describe('OrdersenirioComponent', () => {
  let component: OrdersenirioComponent;
  let fixture: ComponentFixture<OrdersenirioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersenirioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersenirioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
