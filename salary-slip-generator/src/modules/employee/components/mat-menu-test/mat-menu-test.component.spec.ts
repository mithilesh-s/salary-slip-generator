import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { MatMenuTestComponent } from './mat-menu-test.component';
import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatMenuHarness} from '@angular/material/menu/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

let loader: HarnessLoader;

fdescribe('MatMenuTestComponent', () => {
  let component: MatMenuTestComponent;
  let fixture: ComponentFixture<MatMenuTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatMenuTestComponent],
      imports: [
        MatMenuModule,
        NoopAnimationsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MatMenuTestComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have two mat menu', async() => {
  
    const menus = await loader.getAllHarnesses(MatMenuHarness);
    expect(menus.length).toBe(2);
   
  })

  it('should get menu text', async () => {
    const [firstMenu, secondMenu] = await loader.getAllHarnesses(MatMenuHarness);
    expect(await firstMenu.getTriggerText()).toBe('Settings');
    expect(await secondMenu.getTriggerText()).toBe('Disabled menu');
  });

  it('should open and close', async () => {
    const menu = await loader.getHarness(MatMenuHarness.with({triggerText: 'Settings'}));
    expect(await menu.isOpen()).toBe(false);
    await menu.open();
    expect(await menu.isOpen()).toBe(true);
    await menu.close();
    expect(await menu.isOpen()).toBe(false);
  });

  it('should get all items', async () => {
    const menu = await loader.getHarness(MatMenuHarness.with({triggerText: 'Settings'}));
    await menu.open();
    console.log(await menu.getItems());
    
    expect((await menu.getItems()).length).toBe(4);
  })

  it('should get disabled state', async () => {
    const [enabledMenu, disabledMenu] = await loader.getAllHarnesses(MatMenuHarness);
    expect(await enabledMenu.isDisabled()).toBe(false);
    expect(await disabledMenu.isDisabled()).toBe(true);
  });
    

  });
