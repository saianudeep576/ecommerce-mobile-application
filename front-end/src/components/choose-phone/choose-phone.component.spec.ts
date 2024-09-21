import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePhoneComponent } from './choose-phone.component';

describe('ChoosePhoneComponent', () => {
  let component: ChoosePhoneComponent;
  let fixture: ComponentFixture<ChoosePhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosePhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
