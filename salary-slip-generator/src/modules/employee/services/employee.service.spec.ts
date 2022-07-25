import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { TestBed, waitForAsync } from "@angular/core/testing"
import { EmployeeService } from "./employee.service"
import {Employee} from '../../../modules/employee/Employee'
import { of } from "rxjs"

describe('EmployeeService',()=>{

  let employeeService:EmployeeService;
  let httpTestingController:HttpTestingController
debugger
  
  beforeEach(async()=>{
  
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[EmployeeService]
    })

    employeeService=TestBed.inject(EmployeeService);
    httpTestingController=TestBed.inject(HttpTestingController)


  })

  afterEach(()=>{
    httpTestingController.verify();
  })

  it('should retrive the employees from the API via GET',(()=>{
    const dummyEmployees:Employee[]=[
      {
        "id": 1,
        "firstName": "mithilesh",
        "lastName": "shah",
        "email": "mithilesh@gmail.com",
        "mobile": 8305990103,
        "govtId": "dsfsdf",
        "address": "sdfdsf",
        "dob": "2022-07-06T18:30:00.000Z"
      },
      {
        "id": 2,
        "firstName": "mithilesh sahfgnfgnfgsnfgnsgngn",
        "lastName": "shah",
        "email": "mithilesh1@gmail.com",
        "mobile": 8305990101,
        "govtId": "dsfsdf11111",
        "address": "sdfdsf1111",
        "dob": "2022-07-06T18:30:00.000Z"
      }
    ]

    employeeService.getEmployee().subscribe(emp=>{
      debugger
      console.log('---------------------',emp);
      

      // expect(emp.length).toBe(2)
      // expect(emp).toEqual(dummyEmployees)
    })

    const req=httpTestingController.expectOne(`${employeeService.ROOT_URL}/employees`);
    expect(req.request.method).toBe('GET');

    req.flush(dummyEmployees)
  }))

})