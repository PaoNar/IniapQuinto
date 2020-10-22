import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HuecosModalPage } from './huecos-modal.page';

describe('HuecosModalPage', () => {
  let component: HuecosModalPage;
  let fixture: ComponentFixture<HuecosModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuecosModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HuecosModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
