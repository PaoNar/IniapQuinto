import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HojasMarchitasModalPage } from './hojas-marchitas-modal.page';

describe('HojasMarchitasModalPage', () => {
  let component: HojasMarchitasModalPage;
  let fixture: ComponentFixture<HojasMarchitasModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojasMarchitasModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HojasMarchitasModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
