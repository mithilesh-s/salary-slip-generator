import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EmployeeService } from '../../services/employee.service';
import { mockEmp } from '../../test/mock/services/MockEmployeeService';

import { ShowEmployeeDataComponent } from './show-employee-data.component';

describe('ShowEmployeeDataComponent', () => {
  let component: ShowEmployeeDataComponent;
  let fixture: ComponentFixture<ShowEmployeeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEmployeeDataComponent ],
      imports:[
        HttpClientTestingModule
      ],
      providers: [EmployeeService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowEmployeeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call show data method',()=>{
      spyOn(component, 'showData');
      component.showData();
      const btn=fixture.debugElement.query(By.css('#showData'))
      btn.triggerEventHandler('click',null);
      expect(component.showData).toHaveBeenCalled();
  })

  //   it('should call updateEmployee method',()=>{
  //   spyOn(component,'updateEmployee');
  //   component.updateEmployee(mockEmp.id);
  //   const btn=fixture.debugElement.queryAll(By.css('#updateEmployee'))
  //   btn[0].triggerEventHandler('click',null);
  //   expect(component.updateEmployee).toHaveBeenCalled();
  // })

  // it('should call deleteEmployee method',()=>{
  //   spyOn(component,'deleteEmployee');
  //   component.deleteEmployee(mockEmp.id,1);
  //   // const btn=fixture.debugElement.queryAll(By.css('button'))
  //   // btn[0].triggerEventHandler('click',null);
  //   const button:DebugElement[] = fixture.debugElement.queryAll(By.css('.deleteEmployee'))
  //    button.forEach((btn:DebugElement,index:number)=>{
  //     const b=btn[index]
  //    })
  //   expect(component.deleteEmployee).toHaveBeenCalled();
  // })

});
