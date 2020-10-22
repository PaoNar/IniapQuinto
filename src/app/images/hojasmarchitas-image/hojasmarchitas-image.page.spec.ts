import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HojasmarchitasImagePage } from './hojasmarchitas-image.page';

describe('HojasmarchitasImagePage', () => {
  let component: HojasmarchitasImagePage;
  let fixture: ComponentFixture<HojasmarchitasImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojasmarchitasImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HojasmarchitasImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
