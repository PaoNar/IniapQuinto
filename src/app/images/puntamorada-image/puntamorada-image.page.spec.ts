import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PuntamoradaImagePage } from './puntamorada-image.page';

describe('PuntamoradaImagePage', () => {
  let component: PuntamoradaImagePage;
  let fixture: ComponentFixture<PuntamoradaImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntamoradaImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PuntamoradaImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
