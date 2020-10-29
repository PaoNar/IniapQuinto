import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoscaminadoraModalPage } from './moscaminadora-modal.page';

describe('MoscaminadoraModalPage', () => {
  let component: MoscaminadoraModalPage;
  let fixture: ComponentFixture<MoscaminadoraModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoscaminadoraModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoscaminadoraModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
