import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEmployeeDataComponent } from './input-employee-data.component';

describe('InputEmployeeDataComponent', () => {
  let component: InputEmployeeDataComponent;
  let fixture: ComponentFixture<InputEmployeeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputEmployeeDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputEmployeeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
