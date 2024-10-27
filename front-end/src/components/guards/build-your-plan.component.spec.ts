import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildYourPlanComponent } from './build-your-plan.component';

describe('BuildYourPlanComponent', () => {
  let component: BuildYourPlanComponent;
  let fixture: ComponentFixture<BuildYourPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildYourPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildYourPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
