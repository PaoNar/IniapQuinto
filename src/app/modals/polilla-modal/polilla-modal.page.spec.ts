import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolillaModalPage } from './polilla-modal.page';

describe('PolillaModalPage', () => {
  let component: PolillaModalPage;
  let fixture: ComponentFixture<PolillaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolillaModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolillaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
