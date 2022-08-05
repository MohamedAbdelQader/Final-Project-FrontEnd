import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCollectionComponent } from './all-collection.component';

describe('AllCollectionComponent', () => {
  let component: AllCollectionComponent;
  let fixture: ComponentFixture<AllCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
