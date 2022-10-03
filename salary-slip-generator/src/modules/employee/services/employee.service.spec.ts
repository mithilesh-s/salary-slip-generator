import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { mockEmpArray, mockEmp, updatedMockEmp } from '../../../modules/employee/test/mock/services/MockEmployeeService'
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpTestingController: HttpTestingController;



  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService]
    });
    service = TestBed.inject(EmployeeService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getEmployee method and return an array of Employees', () => {

    service.getEmployee().subscribe((res) => {
      expect(res).toEqual(mockEmpArray);
    });

    const req = httpTestingController.expectOne({
      method: 'GET',
      url: `${service.ROOT_URL}/employees`,
    });
    req.flush(mockEmpArray);
  });

  it('should call addEmployee method and return an object of new Employee', () => {

    service.addEmployee(mockEmp).subscribe((res) => {
      expect(res).toEqual(mockEmp);
    });

    const req = httpTestingController.expectOne({
      method: 'POST',
      url: `${service.ROOT_URL}/employees`,
    });
    req.flush(mockEmp);
  });

  it('should call updateEmployee method and return an object of updated Employee', () => {

    service.updateEmployee(mockEmp).subscribe((res) => {
      expect(res).toEqual(updatedMockEmp);
    });

    const req = httpTestingController.expectOne({
      method: 'PUT',
      url: `${service.ROOT_URL}/employees/${mockEmp.id}`
    });
    req.flush(updatedMockEmp);
  });

  it('should call deleteEmloyee method and return an object of deleted Employee', () => {

    service.deleteEmployee(mockEmp.id).subscribe((res) => {
      expect(res).toEqual(mockEmp);
    });

    const req = httpTestingController.expectOne({
      method: 'DELETE',
      url: `${service.ROOT_URL}/employees/${mockEmp.id}`
    });
    req.flush(mockEmp);
  });


});































































































































































// import { EmployeeService } from './employee.service';
// import { HttpClient } from '@angular/common/http';
// import { of } from 'rxjs';
// import { mockEmpArray } from '../../../modules/employee/test/mock/services/MockEmployeeService'
// describe('EmployeeService', () => {
//   let service: EmployeeService;
//   let httpClientSpy: jasmine.SpyObj<HttpClient>;
//   beforeEach(() => {
//     httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
//     service = new EmployeeService(httpClientSpy);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });



//   it('should return expected employees', (done: DoneFn) => {


//     httpClientSpy.get.and.returnValue(of(mockEmpArray));
//     service.getEmployee().subscribe({
//       next: (emps) => {
//         expect(emps).toEqual(mockEmpArray);
//         done();
//       },
//       error: done.fail,
//     });

//     expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);

//   });


//   it('should add one employee data', (done: DoneFn) => {

//     httpClientSpy.post.and.returnValue(of(mockEmpArray));
//     service.addEmployee(mockEmpArray).subscribe({
//       next: emp => {
//         expect(emp).toEqual(mockEmpArray)
//         done();
//       },
//       error: done.fail,
//     })

//     expect(httpClientSpy.post.calls.count()).withContext('one call').toBe(1);

//   })

//   it('should update employee data', (done: DoneFn) => {

//     httpClientSpy.put.and.returnValue(of(mockEmpArray));
//     service.updateEmployee(mockEmpArray[0].id).subscribe({
//       next: emp => {
//         expect(emp).toEqual(mockEmpArray)
//         done();
//       },
//       error: done.fail,
//     })

//     expect(httpClientSpy.put.calls.count()).withContext('one call').toBe(1);
//   })

//   it('should delete employee data', (done: DoneFn) => {

//     httpClientSpy.delete.and.returnValue(of(mockEmpArray));
//     service.deleteEmployee(mockEmpArray[0].id).subscribe({
//       next: emp => {
//         expect(emp).toEqual(mockEmpArray)
//         done();
//       },
//       error: done.fail,
//     })

//     expect(httpClientSpy.delete.calls.count()).withContext('one call').toBe(1);
//   })

// });