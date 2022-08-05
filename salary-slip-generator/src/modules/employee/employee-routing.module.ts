import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputEmployeeDataComponent } from './components/input-employee-data/input-employee-data.component';
import { MatMenuTestComponent } from './components/mat-menu-test/mat-menu-test.component';
import { ShowEmployeeDataComponent } from './components/show-employee-data/show-employee-data.component';
import { TestDialogComponent } from './components/test-dialog/test-dialog.component';
import { TestDirectiveComponent } from './components/test-directive/test-directive.component';

export const routes: Routes = [
 {path:'',children:[
  {path:'',redirectTo:'input-data',pathMatch:'full'},
  {path:'input-data',component:InputEmployeeDataComponent},
  {path:'show-data',component:ShowEmployeeDataComponent},
  {path:'test-directive',component:TestDirectiveComponent},
  {path:'test-dialog',component:TestDialogComponent},
  {path:'mat-menu',component:MatMenuTestComponent},
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
