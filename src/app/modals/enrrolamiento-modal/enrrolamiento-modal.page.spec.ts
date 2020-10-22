import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnrrolamientoModalPage } from './enrrolamiento-modal.page';

describe('EnrrolamientoModalPage', () => {
  let component: EnrrolamientoModalPage;
  let fixture: ComponentFixture<EnrrolamientoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrrolamientoModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnrrolamientoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
