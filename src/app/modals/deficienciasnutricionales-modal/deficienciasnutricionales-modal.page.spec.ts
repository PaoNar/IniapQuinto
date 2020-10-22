import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeficienciasnutricionalesModalPage } from './deficienciasnutricionales-modal.page';

describe('DeficienciasnutricionalesModalPage', () => {
  let component: DeficienciasnutricionalesModalPage;
  let fixture: ComponentFixture<DeficienciasnutricionalesModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeficienciasnutricionalesModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeficienciasnutricionalesModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
