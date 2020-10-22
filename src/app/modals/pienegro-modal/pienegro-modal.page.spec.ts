import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PienegroModalPage } from './pienegro-modal.page';

describe('PienegroModalPage', () => {
  let component: PienegroModalPage;
  let fixture: ComponentFixture<PienegroModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PienegroModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PienegroModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
