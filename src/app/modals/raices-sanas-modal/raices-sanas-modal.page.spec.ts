import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RaicesSanasModalPage } from './raices-sanas-modal.page';

describe('RaicesSanasModalPage', () => {
  let component: RaicesSanasModalPage;
  let fixture: ComponentFixture<RaicesSanasModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaicesSanasModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RaicesSanasModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
