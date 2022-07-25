import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputEmployeeDataComponent } from './components/input-employee-data/input-employee-data.component';
import { EmployeeService } from './services/employee.service';


@NgModule({
  declarations: [
    InputEmployeeDataComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  
  ],
  providers:[EmployeeService]
})
export class EmployeeModule { 
  constructor(){
    console.log("employee module loaded.");
    
  }
}
