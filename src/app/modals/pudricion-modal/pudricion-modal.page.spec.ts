import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PudricionModalPage } from './pudricion-modal.page';

describe('PudricionModalPage', () => {
  let component: PudricionModalPage;
  let fixture: ComponentFixture<PudricionModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PudricionModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PudricionModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
