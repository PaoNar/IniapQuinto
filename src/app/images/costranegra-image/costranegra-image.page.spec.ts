import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CostranegraImagePage } from './costranegra-image.page';

describe('CostranegraImagePage', () => {
  let component: CostranegraImagePage;
  let fixture: ComponentFixture<CostranegraImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostranegraImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CostranegraImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
