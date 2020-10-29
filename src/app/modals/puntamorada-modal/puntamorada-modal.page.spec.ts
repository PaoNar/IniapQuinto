import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PuntamoradaModalPage } from './puntamorada-modal.page';

describe('PuntamoradaModalPage', () => {
  let component: PuntamoradaModalPage;
  let fixture: ComponentFixture<PuntamoradaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntamoradaModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PuntamoradaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
