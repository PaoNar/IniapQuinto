import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HojasamarillasplantaImagePage } from './hojasamarillasplanta-image.page';

describe('HojasamarillasplantaImagePage', () => {
  let component: HojasamarillasplantaImagePage;
  let fixture: ComponentFixture<HojasamarillasplantaImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojasamarillasplantaImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HojasamarillasplantaImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
