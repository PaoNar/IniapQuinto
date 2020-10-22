import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmpollasModalPage } from './ampollas-modal.page';

describe('AmpollasModalPage', () => {
  let component: AmpollasModalPage;
  let fixture: ComponentFixture<AmpollasModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmpollasModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmpollasModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
