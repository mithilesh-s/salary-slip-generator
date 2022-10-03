import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirstDialogComponent } from '../first-dialog/first-dialog.component';
import { SecondDialogComponent } from '../second-dialog/second-dialog.component';

@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.scss']
})
export class TestDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog1(){
    this.dialog.open(FirstDialogComponent)
  }

  openDialog2(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SecondDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    }).afterClosed().subscribe(res=>{
      console.log(res);
      
    })
  }
}



