import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HuecosPage } from './huecos.page';

describe('HuecosPage', () => {
  let component: HuecosPage;
  let fixture: ComponentFixture<HuecosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuecosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HuecosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
