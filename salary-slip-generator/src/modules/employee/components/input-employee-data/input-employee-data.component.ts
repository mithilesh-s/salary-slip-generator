import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-input-employee-data',
  templateUrl: './input-employee-data.component.html',
  styleUrls: ['./input-employee-data.component.scss']
})
export class InputEmployeeDataComponent implements OnInit {

  personalInfoFormGroup!: FormGroup;
  basicInfoFormGroup!: FormGroup;
  maxDate!: Date
  personalInformation: any
  basicInformation: any
  count: number = 0;
  employees: any



  get firstName() {
    return this.personalInfoFormGroup.get('firstName');
  }
  get lastName() {
    return this.personalInfoFormGroup.get('lastName');
  }
  get email() {
    return this.personalInfoFormGroup.get('email');
  }
  get mobile() {
    return this.personalInfoFormGroup.get('mobile');
  }
  get govtId() {
    return this.basicInfoFormGroup.get('govtId');
  }
  get address() {
    return this.basicInfoFormGroup.get('address');
  }
  get dob() {
    return this.basicInfoFormGroup.get('dob');
  }



  constructor(private _formBuilder: FormBuilder, private _employeeService: EmployeeService, private router:Router) { }


  ngOnInit(): void {
    this.personalInfoFormGroup = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('[6-9]{1}[0-9]{9}')]],
    })

    this.basicInfoFormGroup = this._formBuilder.group({
      govtId: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      address: [''],
    })
    this.maxDate = new Date()

    this.getEmployee()
  }



  submitPersonalInfoForm() {
    if (this.personalInfoFormGroup.valid) {
      this.personalInformation = this.personalInfoFormGroup.value
    }
  }
  submitBasicInfoForm() {
    if (this.basicInfoFormGroup.valid && this.personalInfoFormGroup.valid) {
      this.basicInformation = this.basicInfoFormGroup.value
      console.log(this.basicInformation);
      const employee = {
        id: ++this.count,
        firstName: this.personalInfoFormGroup.value.firstName,
        lastName: this.personalInfoFormGroup.value.lastName,
        email: this.personalInfoFormGroup.value.email,
        mobile: this.personalInfoFormGroup.value.mobile,
        govtId: this.basicInfoFormGroup.value.govtId,
        address: this.basicInfoFormGroup.value.address,
        dob: this.basicInfoFormGroup.value.dob
      }
      this.addEmployee(employee)
    }
  }

  getEmployee() {
    this._employeeService.getEmployee().subscribe(res => {
      if (res.length > 0) {
        this.employees = res;
        this.employees.forEach((element: any) => {
          if (element.id > this.count) {
            this.count = element.id;
          }
        });
      }
    })
  }

  addEmployee(employee: any) {
    this._employeeService.addEmployee(employee).subscribe(
      res=>{
        this.navigateToShowDataPage();
      }
    )
  }

  navigateToShowDataPage(){
    this.router.navigate(['/employee/show-data'])
  }



 
}









