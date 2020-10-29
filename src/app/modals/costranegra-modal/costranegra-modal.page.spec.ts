import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CostranegraModalPage } from './costranegra-modal.page';

describe('CostranegraModalPage', () => {
  let component: CostranegraModalPage;
  let fixture: ComponentFixture<CostranegraModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostranegraModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CostranegraModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
