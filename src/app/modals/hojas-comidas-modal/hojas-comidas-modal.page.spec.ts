import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HojasComidasModalPage } from './hojas-comidas-modal.page';

describe('HojasComidasModalPage', () => {
  let component: HojasComidasModalPage;
  let fixture: ComponentFixture<HojasComidasModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojasComidasModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HojasComidasModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
