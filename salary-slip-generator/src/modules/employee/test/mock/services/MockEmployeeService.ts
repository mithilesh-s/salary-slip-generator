import { Observable } from "rxjs/internal/Observable";
import { Employee } from "src/modules/employee/Employee";

export class MockEmployeeService {



    addEmployee(employee: any) {

    }

    getEmployee() {
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
              "firstName": "mithilesh sah",
              "lastName": "shah",
              "email": "mithilesh1@gmail.com",
              "mobile": 8305990101,
              "govtId": "dsfsdf11111",
              "address": "sdfdsf1111",
              "dob": "2022-07-06T18:30:00.000Z"
            }
          ]
        return dummyEmployees;
    }
}
