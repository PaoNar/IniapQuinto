import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PulgonesModalPage } from './pulgones-modal.page';

describe('PulgonesModalPage', () => {
  let component: PulgonesModalPage;
  let fixture: ComponentFixture<PulgonesModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulgonesModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PulgonesModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
