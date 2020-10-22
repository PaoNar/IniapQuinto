import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarbonImagePage } from './carbon-image.page';

describe('CarbonImagePage', () => {
  let component: CarbonImagePage;
  let fixture: ComponentFixture<CarbonImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarbonImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarbonImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
