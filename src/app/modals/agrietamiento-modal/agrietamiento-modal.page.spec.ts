import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgrietamientoModalPage } from './agrietamiento-modal.page';

describe('AgrietamientoModalPage', () => {
  let component: AgrietamientoModalPage;
  let fixture: ComponentFixture<AgrietamientoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrietamientoModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgrietamientoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
