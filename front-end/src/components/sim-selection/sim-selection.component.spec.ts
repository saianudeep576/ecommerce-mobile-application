import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimSelectionComponent } from './sim-selection.component';

describe('SimSelectionComponent', () => {
  let component: SimSelectionComponent;
  let fixture: ComponentFixture<SimSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
