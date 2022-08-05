import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { By } from '@angular/platform-browser';

import { MatMenuTestComponent } from './mat-menu-test.component';

describe('MatMenuTestComponent', () => {
  let component: MatMenuTestComponent;
  let fixture: ComponentFixture<MatMenuTestComponent>;
  let dom;
  let button;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatMenuTestComponent ],
      imports:[
        MatMenuModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatMenuTestComponent);
    component = fixture.componentInstance;
    dom = fixture.nativeElement;
    button = dom.querySelector('#userMenu');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  fit('should not have the menu open', async () => {
    const menu = dom.parentNode.querySelector('.mat-menu-panel');
    expect(menu).toBeFalsy();
  });

});
