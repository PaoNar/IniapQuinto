import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoscaMinadoraModalPage } from './mosca-minadora-modal.page';

describe('MoscaMinadoraModalPage', () => {
  let component: MoscaMinadoraModalPage;
  let fixture: ComponentFixture<MoscaMinadoraModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoscaMinadoraModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoscaMinadoraModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
