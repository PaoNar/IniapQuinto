import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HojasMordidasModalPage } from './hojas-mordidas-modal.page';

describe('HojasMordidasModalPage', () => {
  let component: HojasMordidasModalPage;
  let fixture: ComponentFixture<HojasMordidasModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojasMordidasModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HojasMordidasModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
