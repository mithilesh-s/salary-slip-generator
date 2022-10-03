import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Employee';

@Injectable({
  providedIn: 'root',

})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  ROOT_URL='http://localhost:3000'

  addEmployee(employee: any) {
    return this.http.post(`${this.ROOT_URL}/employees`, employee);
  }

  getEmployee():Observable<any> {
    return this.http.get(`${this.ROOT_URL}/employees`) 
  }

  updateEmployee(employee:any){
    return this.http.put(`${this.ROOT_URL}/employees/${employee.id}`,employee)
  }

  deleteEmployee(employeeId:any){
    return this.http.delete(`${this.ROOT_URL}/employees/${employeeId}`)
  }

  
}
