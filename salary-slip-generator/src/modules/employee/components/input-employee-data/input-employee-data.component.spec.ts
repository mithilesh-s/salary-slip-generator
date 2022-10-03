import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InputEmployeeDataComponent } from './input-employee-data.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { mockEmp } from '../../test/mock/services/MockEmployeeService';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ShowEmployeeDataComponent } from '../show-employee-data/show-employee-data.component';
// import { mockEmpArray, mockEmp ,updatedMockEmp} from '../../../modules/employee/test/mock/services/MockEmployeeService'



describe('InputEmployeeDataComponent', () => {
  let component: InputEmployeeDataComponent;
  let fixture: ComponentFixture<InputEmployeeDataComponent>;
  let router: Router
  let location: Location
  let debugElement: DebugElement
  // let mockRouter = {
  //   navigate: jasmine.createSpy('navigate')
  // };
  // let mockRouter = {
  //   navigate: jasmine.createSpyObj('Router', ['navigate']) ------------------not working
  // };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputEmployeeDataComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          {
            path: '', children: [
              { path: '', redirectTo: 'input-data', pathMatch: 'full' },
              { path: 'input-data', component: InputEmployeeDataComponent },
              { path: 'employee/show-data', component: ShowEmployeeDataComponent }
            ]
          }
        ])
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        EmployeeService,
        // { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();


    fixture = TestBed.createComponent(InputEmployeeDataComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router)
    location = TestBed.inject(Location)
    debugElement = fixture.debugElement
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call submitPersonalInfo method', () => {
    spyOn(component, 'submitPersonalInfoForm');
    component.submitPersonalInfoForm();
    expect(component.submitPersonalInfoForm).toHaveBeenCalled();
  })

  it('should call submitBasicInfoForm method', () => {
    spyOn(component, 'submitBasicInfoForm');
    component.submitBasicInfoForm();
    expect(component.submitBasicInfoForm).toHaveBeenCalled();
  })
  it('should call addEmployee method', () => {
    spyOn(component, 'addEmployee');
    component.addEmployee(mockEmp);
    expect(component.addEmployee).toHaveBeenCalled();
  })

  // it('should call getEmployee method', () => {
  //   spyOn(component, 'getEmployee');
  //   component.getEmployee();
  //   expect(component.getEmployee).toHaveBeenCalled();
  // })

  // it('should call updateEmployee method', () => {
  //   spyOn(component, 'updateEmployee');
  //   component.updateEmployee(mockEmp.id);
  //   expect(component.updateEmployee).toHaveBeenCalled();
  // })

  // it('should call deleteEmployee method', () => {
  //   spyOn(component, 'deleteEmployee');
  //   component.deleteEmployee(mockEmp.id);
  //   expect(component.deleteEmployee).toHaveBeenCalled();
  // })

  // it('should call updateEmployee method',()=>{
  //   spyOn(component,'updateEmployee');
  //   component.updateEmployee(mockEmp.id);
  //   const btn=fixture.debugElement.query(By.css('button'))
  //   btn.triggerEventHandler('click',null);
  //   expect(component.updateEmployee).toHaveBeenCalled();
  // })

  // it('should call deleteEmployee method',()=>{
  //   spyOn(component,'deleteEmployee');
  //   component.deleteEmployee(mockEmp.id);
  //   const btn=debugElement.query(By.css('button'))
  //   btn.triggerEventHandler('click',null);
  //   expect(component.deleteEmployee).toHaveBeenCalled();
  // })


  it('should check that First Name is required ', () => {
    let firstName = component.personalInfoFormGroup.controls['firstName'];
    firstName.setValue('')
    expect(firstName.valid).toBeFalsy();
    expect(firstName.errors['required']).toBeTruthy();
  })

  it('should Set First Name value then check', () => {
    let firstName = component.personalInfoFormGroup.controls['firstName'];
    firstName.setValue('firstName')
    expect(firstName.valid).toBeTruthy();
    expect(firstName.value).toEqual('firstName')
  })

  it('should check that Last Name is required', () => {
    let lastName = component.personalInfoFormGroup.controls['lastName'];
    lastName.setValue('')
    expect(lastName.valid).toBeFalsy();
    expect(lastName.errors['required']).toBeTruthy();
  })

  it('should Set Last Name value then check', () => {
    let lastName = component.personalInfoFormGroup.controls['lastName'];
    lastName.setValue('lastName')
    expect(lastName.valid).toBeTruthy();
    expect(lastName.value).toEqual('lastName')
  })

  it('should check that Email is required', () => {
    let email = component.personalInfoFormGroup.controls['email'];
    email.setValue('')
    expect(email.valid).toBeFalsy();
    expect(email.errors['required']).toBeTruthy();
    email.setValue('invalidEmail')
    expect(email.errors['email']).toBeTruthy();
  })

  it('should set email value then check', () => {
    let email = component.personalInfoFormGroup.controls['email'];
    email.setValue('email@gmail.com')
    expect(email.valid).toBeTruthy();
    expect(email.value).toEqual('email@gmail.com')
  })

  it('should check that Phone is required', () => {
    let mobile = component.personalInfoFormGroup.controls['mobile'];
    mobile.setValue(null)
    expect(mobile.valid).toBeFalsy();
    expect(mobile.errors['required']).toBeTruthy();
    mobile.setValue(1234567892)
    expect(mobile.errors['pattern']).toBeTruthy();
  })

  it('should set Phone value then check', () => {
    let mobile = component.personalInfoFormGroup.controls['mobile'];
    mobile.setValue(7878787878)
    expect(mobile.valid).toBeTruthy();
    expect(mobile.value).toEqual(7878787878)
  })

  it('personalInfoForm should be valid', () => {
    let firstName = component.personalInfoFormGroup.controls['firstName']
    firstName.setValue('firstName');
    let lastName = component.personalInfoFormGroup.controls['lastName']
    lastName.setValue('lastName');
    let email = component.personalInfoFormGroup.controls['email']
    email.setValue('email@gmail.com');
    let mobile = component.personalInfoFormGroup.controls['mobile']
    mobile.setValue(7878787878);
    expect(component.personalInfoFormGroup.valid).toBeTruthy();
  })
  it('personalInfoForm can be invalid', () => {
    let firstName = component.personalInfoFormGroup.controls['firstName']
    firstName.setValue('');
    let lastName = component.personalInfoFormGroup.controls['lastName']
    lastName.setValue('');
    let email = component.personalInfoFormGroup.controls['email']
    email.setValue('');
    let mobile = component.personalInfoFormGroup.controls['mobile']
    mobile.setValue(null);
    expect(component.personalInfoFormGroup.valid).toBeFalsy();
  })

  it('should check that Govt ID is required ', () => {
    let govtId = component.basicInfoFormGroup.controls['govtId'];
    govtId.setValue('')
    expect(govtId.valid).toBeFalsy();
    expect(govtId.errors['required']).toBeTruthy();
  })

  it('should Set Govt ID value then check', () => {
    let govtId = component.basicInfoFormGroup.controls['govtId'];
    govtId.setValue('KEWZFD123')
    expect(govtId.valid).toBeTruthy();
    expect(govtId.value).toEqual('KEWZFD123')
  })
  it('should check that DOB is required ', () => {
    let dob = component.basicInfoFormGroup.controls['dob'];
    dob.setValue('')
    expect(dob.valid).toBeFalsy();
    expect(dob.errors['required']).toBeTruthy();
  })

  it('should Set DOB value then check', () => {
    let dob = component.basicInfoFormGroup.controls['dob'];
    dob.setValue('2022-07-13T18:30:00.000Z')
    expect(dob.valid).toBeTruthy();
    expect(dob.value).toEqual('2022-07-13T18:30:00.000Z')
  })
  it('should check that Address is valid or not ', () => {
    let address = component.basicInfoFormGroup.controls['address'];
    address.setValue('Noida UP')
    expect(address.valid).toBeTruthy();
    expect(address.value).toEqual('Noida UP')
  })


  it('BasicInfoForm should be valid', () => {
    let govtId = component.basicInfoFormGroup.controls['govtId']
    govtId.setValue('KEWZFD123');
    let dob = component.basicInfoFormGroup.controls['dob']
    dob.setValue('2022-07-13T18:30:00.000Z');
    let address = component.basicInfoFormGroup.controls['address']
    address.setValue('');
    expect(component.basicInfoFormGroup.valid).toBeTruthy();
  })

  it('BasicInfoForm can be invalid', () => {
    let govtId = component.basicInfoFormGroup.controls['govtId']
    govtId.setValue('');
    let dob = component.basicInfoFormGroup.controls['dob']
    dob.setValue('');
    expect(component.basicInfoFormGroup.valid).toBeFalsy();
  })


  //this is first way to test the routings using router.navigate()

  it('should navigate to show data page', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.navigateToShowDataPage();
    expect(navigateSpy).toHaveBeenCalledWith(['/employee/show-data']);
  })

  // this is second way to test the routings

  // it('should navigate to show data page', () => {
  //   component.navigateToShowDataPage();
  //   expect(mockRouter.navigate).toHaveBeenCalledWith(['employee/show-data']);
  // })


  // this is second way to test the routings using routerLink in template file.
  // fit('should navigate to show data page', () => {
  //   const submitBtn = fixture.debugElement.query(By.css('#submitBtn'));
  //   expect(submitBtn.nativeElement.getAttribute('routerLink')).toEqual('/employee/show-data');
  // })

  it('should navigate to show data page', fakeAsync(() => {
    const button = fixture.debugElement.nativeElement.querySelector('#submitBtn');
    button.click();
    tick();
    expect(location.path()).toBe('/employee/show-data');
  }))


});
