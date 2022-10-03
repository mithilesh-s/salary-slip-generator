import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputEmployeeDataComponent } from './components/input-employee-data/input-employee-data.component';
import { EmployeeService } from './services/employee.service';
import { ShowEmployeeDataComponent } from './components/show-employee-data/show-employee-data.component';
import { CustomDirective } from './directives/custom.directive';
import { TestDirectiveComponent } from './components/test-directive/test-directive.component';
import { CustomPipe } from './custom.pipe';
import { TestDialogComponent } from './components/test-dialog/test-dialog.component';
import { FirstDialogComponent } from './components/first-dialog/first-dialog.component';
import { SecondDialogComponent } from './components/second-dialog/second-dialog.component';
import { MatMenuTestComponent } from './components/mat-menu-test/mat-menu-test.component';


@NgModule({
  declarations: [
    InputEmployeeDataComponent,
    ShowEmployeeDataComponent,
    CustomDirective,
    TestDirectiveComponent,
    CustomPipe,
    TestDialogComponent,
    FirstDialogComponent,
    SecondDialogComponent,
    MatMenuTestComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    
  
  ],
  providers:[EmployeeService]
})
export class EmployeeModule { 
  constructor(){
    console.log("employee module loaded.");
    
  }
}
