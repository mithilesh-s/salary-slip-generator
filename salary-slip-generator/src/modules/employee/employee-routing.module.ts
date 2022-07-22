import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputEmployeeDataComponent } from './components/input-employee-data/input-employee-data.component';

const routes: Routes = [
 {path:'',children:[
  {path:'',redirectTo:'input-data',pathMatch:'full'},
  {path:'input-data',component:InputEmployeeDataComponent}
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
