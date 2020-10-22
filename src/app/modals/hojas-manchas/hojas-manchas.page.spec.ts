import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HojasManchasPage } from './hojas-manchas.page';

describe('HojasManchasPage', () => {
  let component: HojasManchasPage;
  let fixture: ComponentFixture<HojasManchasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojasManchasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HojasManchasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
