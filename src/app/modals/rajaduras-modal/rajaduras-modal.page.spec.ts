import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RajadurasModalPage } from './rajaduras-modal.page';

describe('RajadurasModalPage', () => {
  let component: RajadurasModalPage;
  let fixture: ComponentFixture<RajadurasModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RajadurasModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RajadurasModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
