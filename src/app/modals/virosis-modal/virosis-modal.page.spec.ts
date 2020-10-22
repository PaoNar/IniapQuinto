import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VirosisModalPage } from './virosis-modal.page';

describe('VirosisModalPage', () => {
  let component: VirosisModalPage;
  let fixture: ComponentFixture<VirosisModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirosisModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VirosisModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
