import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NgxMatFileInputModule } from '@angular-material-components/file-input';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexLayoutModule } from '@angular/flex-layout';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu'

const MatModules=[
  MatButtonModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  NgxMatFileInputModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule,
  FlexLayoutModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatMenuModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatModules
  ],
  exports:[
    MatModules
  ]
 
})
export class MaterialModule { }
