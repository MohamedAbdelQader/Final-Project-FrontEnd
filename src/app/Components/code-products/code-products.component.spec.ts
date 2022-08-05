import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeProductsComponent } from './code-products.component';

describe('CodeProductsComponent', () => {
  let component: CodeProductsComponent;
  let fixture: ComponentFixture<CodeProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
