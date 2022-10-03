import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-dialog',
  templateUrl: './second-dialog.component.html',
  styleUrls: ['./second-dialog.component.scss']
})
export class SecondDialogComponent implements OnInit {

  constructor() { }

  No:string="NO"
  Yes:string="YES"
  ngOnInit(): void {
  }

}
