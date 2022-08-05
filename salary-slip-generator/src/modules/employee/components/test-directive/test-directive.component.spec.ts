import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CustomDirective } from '../../directives/custom.directive';

import { TestDirectiveComponent } from './test-directive.component';

describe('TestDirectiveComponent', () => {
  let component: TestDirectiveComponent;
  let fixture: ComponentFixture<TestDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDirectiveComponent,CustomDirective ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud test the behaviour of customDiv element using custom directive',()=>{

    component.userName='Mithilesh';
    let btn=fixture.debugElement.query(By.css('#showDiv'));
    btn.triggerEventHandler('click',null)
    fixture.detectChanges();
    let div=fixture.debugElement.query(By.css('#customDiv'))
    expect(div.nativeElement.innerHTML).toContain('Hello Mithilesh')
    expect(div.nativeElement.style.backgroundColor).toBe('green')
    div.triggerEventHandler('mouseover',null);
    fixture.detectChanges();
    expect(div.nativeElement.style.fontSize).toBe('28px')
    expect(div.nativeElement.style.backgroundColor).toBe('orange')
    expect(div.nativeElement.style.fontWeight).toBe('bolder')

  })

});
