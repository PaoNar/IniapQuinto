import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HojasmarchitasplantaImagePage } from './hojasmarchitasplanta-image.page';

describe('HojasmarchitasplantaImagePage', () => {
  let component: HojasmarchitasplantaImagePage;
  let fixture: ComponentFixture<HojasmarchitasplantaImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojasmarchitasplantaImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HojasmarchitasplantaImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
