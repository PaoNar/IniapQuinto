import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManchaNegraModalPage } from './mancha-negra-modal.page';

describe('ManchaNegraModalPage', () => {
  let component: ManchaNegraModalPage;
  let fixture: ComponentFixture<ManchaNegraModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManchaNegraModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManchaNegraModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
