import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import { InputEmployeeDataComponent } from './input-employee-data.component';

describe('InputEmployeeDataComponent', () => {
  let component: InputEmployeeDataComponent;
  let fixture: ComponentFixture<InputEmployeeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputEmployeeDataComponent ],
      imports:[
        FormsModule, 
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers:[EmployeeService]
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
