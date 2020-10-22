import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarbonModalPage } from './carbon-modal.page';

describe('CarbonModalPage', () => {
  let component: CarbonModalPage;
  let fixture: ComponentFixture<CarbonModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarbonModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarbonModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
