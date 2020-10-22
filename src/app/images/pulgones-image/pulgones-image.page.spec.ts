import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PulgonesImagePage } from './pulgones-image.page';

describe('PulgonesImagePage', () => {
  let component: PulgonesImagePage;
  let fixture: ComponentFixture<PulgonesImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulgonesImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PulgonesImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
