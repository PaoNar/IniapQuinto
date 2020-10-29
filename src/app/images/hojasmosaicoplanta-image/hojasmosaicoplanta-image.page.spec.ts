import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HojasmosaicoplantaImagePage } from './hojasmosaicoplanta-image.page';

describe('HojasmosaicoplantaImagePage', () => {
  let component: HojasmosaicoplantaImagePage;
  let fixture: ComponentFixture<HojasmosaicoplantaImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojasmosaicoplantaImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HojasmosaicoplantaImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
