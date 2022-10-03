// export const Employee=[
//     {
//         "id": 1,
//         "firstName": "mithilesh",
//         "lastName": "shah",
//         "email": "mithilesh@gmail.com",
//         "mobile": "mithilesh",
//         "govtId": "Helo",
//         "address": "sdfsdfdsf",
//         "dob": "2022-07-20T18:30:00.000Z"
//     }
// ]
export interface Employee{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    mobile:number;
    govtId:string;
    address:string;
    dob:string;
}
    


// export interface MyInterface extends Array<Employee> { }