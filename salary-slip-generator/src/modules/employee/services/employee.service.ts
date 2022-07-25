import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  ROOT_URL='http://localhost:3000'

  addEmployee(employee: any) {
    this.http.post(`${this.ROOT_URL}/employees`, employee).subscribe(
      res => {
        console.log('successfully added')
      },
      err => {
        console.log('something went');
      })
  }

  getEmployee():Observable<any> {
    return this.http.get(`${this.ROOT_URL}/employees`)
  }
}
