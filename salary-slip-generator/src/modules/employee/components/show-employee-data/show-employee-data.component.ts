import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-show-employee-data',
  templateUrl: './show-employee-data.component.html',
  styleUrls: ['./show-employee-data.component.scss']
})
export class ShowEmployeeDataComponent implements OnInit {

  count: number = 0;
  employees: any[] = []
  loadData: boolean = false;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  getEmployee() {
    this.loadData = true
    this._employeeService.getEmployee().subscribe(res => {
      if (res.length > 0) {
        this.employees = res;
      }
      this.loadData = false;
    })
  }

  deleteEmployee(employeeId: number, index: number) {
    this.loadData = true
    this.employees.slice(index)
    this._employeeService.deleteEmployee(employeeId).subscribe(
      res => {

        this.loadData = false
      })
  }

  updateEmployee(employeeId: number) {

    const updateEmp = this.employees[employeeId]
    updateEmp.firstName = "sushama",
    updateEmp.lastName = 'shah'
    updateEmp.email = "sushama@gmai.com",
    updateEmp.mobile = "6565656565"
    updateEmp.govtId = "sfhdsf"
    updateEmp.address = "sdfhdsf"
    updateEmp.dob = '12-12-22'
    this.loadData = true
    this._employeeService.updateEmployee(updateEmp).subscribe(
      res => {

        this.loadData = false
      })


  }

  showData() {
    this.getEmployee();
  }

}
