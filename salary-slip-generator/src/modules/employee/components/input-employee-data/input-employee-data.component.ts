import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-employee-data',
  templateUrl: './input-employee-data.component.html',
  styleUrls: ['./input-employee-data.component.scss']
})
export class InputEmployeeDataComponent implements OnInit {

  personalInfoFormGroup!:FormGroup;
  basicInfoFormGroup!:FormGroup;
  maxDate!:Date
  personalInformation:any
  basicInformation:any
  count:number=0;
  employees:any


  
  get firstName(){
    return this.personalInfoFormGroup.get('firstName');
  }
  get lastName(){
    return this.personalInfoFormGroup.get('lastName');
  }
  get email(){
    return this.personalInfoFormGroup.get('email');
  }
  get mobile(){
    return this.personalInfoFormGroup.get('mobile');
  }
  get govtId(){
    return this.basicInfoFormGroup.get('govtId');
  }
  get address(){
    return this.basicInfoFormGroup.get('address');
  }
  get dob(){
    return this.basicInfoFormGroup.get('dob');
  }
  get profile(){
    return this.basicInfoFormGroup.get('profile');
  }



  constructor(private _formBuilder: FormBuilder,private http:HttpClient) {}


  ngOnInit(): void {
    this.personalInfoFormGroup=this._formBuilder.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required, Validators.pattern('[6-9]{1}[0-9]{9}')]],
    })

    this.basicInfoFormGroup=this._formBuilder.group({
      govtId:['',[Validators.required]],
      profile:['',[Validators.required]],
      dob:['',[Validators.required]],
      address:['',[Validators.required]],
    })
    this.maxDate = new Date()

   this.http.get('http://localhost:3000/employees').subscribe(res=>{
    this.employees=res;
    console.log(this.employees);
    
  
    
   })


  }

  submitPersonalInfoForm(){
    if(this.personalInfoFormGroup.valid){

      this.personalInformation=this.personalInfoFormGroup.value
      console.log(this.personalInformation);
      
    }
  }
  submitBasicInfoForm(){
    if(this.basicInfoFormGroup.valid && this.personalInfoFormGroup.valid){
      this.basicInformation=this.basicInfoFormGroup.value
      console.log(this.basicInformation);
      const employee={
        id:++this.employees.length,
        firstName:this.personalInfoFormGroup.value.firstName,
        lastName:this.personalInfoFormGroup.value.lastName,
        email:this.personalInfoFormGroup.value.email,
        mobile:this.personalInfoFormGroup.value.firstName,
        govtId:this.basicInfoFormGroup.value.govtId,
        address:this.basicInfoFormGroup.value.address,
        dob:this.basicInfoFormGroup.value.dob,
        profile:this.basicInfoFormGroup.value.profile,
      }
      this.addEmployee(employee)
      
    }
  }

  addEmployee(employee:any){
      this.http.post('http://localhost:3000/employees',employee).subscribe(res=>{
        console.log('successfully added');
        
      },
      err=>{
        console.log('something went');
        
      })
  }

  emailVerification(){
    this.employees.forEach( (element:any)=> {
      if(element.email==this.personalInfoFormGroup.value.email){
        alert('email already exist')
      }
    });
  }

  

}
