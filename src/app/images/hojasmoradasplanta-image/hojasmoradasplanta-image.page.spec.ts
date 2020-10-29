import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HojasmoradasplantaImagePage } from './hojasmoradasplanta-image.page';

describe('HojasmoradasplantaImagePage', () => {
  let component: HojasmoradasplantaImagePage;
  let fixture: ComponentFixture<HojasmoradasplantaImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojasmoradasplantaImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HojasmoradasplantaImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
