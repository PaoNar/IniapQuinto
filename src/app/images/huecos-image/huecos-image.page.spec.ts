import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HuecosImagePage } from './huecos-image.page';

describe('HuecosImagePage', () => {
  let component: HuecosImagePage;
  let fixture: ComponentFixture<HuecosImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuecosImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HuecosImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
