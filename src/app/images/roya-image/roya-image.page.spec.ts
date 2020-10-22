import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoyaImagePage } from './roya-image.page';

describe('RoyaImagePage', () => {
  let component: RoyaImagePage;
  let fixture: ComponentFixture<RoyaImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoyaImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoyaImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
