import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HojasMoradasModalPage } from './hojas-moradas-modal.page';

describe('HojasMoradasModalPage', () => {
  let component: HojasMoradasModalPage;
  let fixture: ComponentFixture<HojasMoradasModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojasMoradasModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HojasMoradasModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
