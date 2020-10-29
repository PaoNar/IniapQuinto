import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HuecostalloImagePage } from './huecostallo-image.page';

describe('HuecostalloImagePage', () => {
  let component: HuecostalloImagePage;
  let fixture: ComponentFixture<HuecostalloImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuecostalloImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HuecostalloImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
