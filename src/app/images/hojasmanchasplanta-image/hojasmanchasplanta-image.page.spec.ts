import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HojasmanchasplantaImagePage } from './hojasmanchasplanta-image.page';

describe('HojasmanchasplantaImagePage', () => {
  let component: HojasmanchasplantaImagePage;
  let fixture: ComponentFixture<HojasmanchasplantaImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojasmanchasplantaImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HojasmanchasplantaImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
