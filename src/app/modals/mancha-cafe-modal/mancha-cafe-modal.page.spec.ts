import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManchaCafeModalPage } from './mancha-cafe-modal.page';

describe('ManchaCafeModalPage', () => {
  let component: ManchaCafeModalPage;
  let fixture: ComponentFixture<ManchaCafeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManchaCafeModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManchaCafeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
