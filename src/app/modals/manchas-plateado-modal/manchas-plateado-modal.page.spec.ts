import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManchasPlateadoModalPage } from './manchas-plateado-modal.page';

describe('ManchasPlateadoModalPage', () => {
  let component: ManchasPlateadoModalPage;
  let fixture: ComponentFixture<ManchasPlateadoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManchasPlateadoModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManchasPlateadoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
