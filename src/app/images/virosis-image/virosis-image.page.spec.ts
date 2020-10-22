import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VirosisImagePage } from './virosis-image.page';

describe('VirosisImagePage', () => {
  let component: VirosisImagePage;
  let fixture: ComponentFixture<VirosisImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirosisImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VirosisImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
