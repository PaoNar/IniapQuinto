import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoyaModalPage } from './roya-modal.page';

describe('RoyaModalPage', () => {
  let component: RoyaModalPage;
  let fixture: ComponentFixture<RoyaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoyaModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoyaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
