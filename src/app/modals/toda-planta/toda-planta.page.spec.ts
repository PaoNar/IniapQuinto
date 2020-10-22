import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodaPlantaPage } from './toda-planta.page';

describe('TodaPlantaPage', () => {
  let component: TodaPlantaPage;
  let fixture: ComponentFixture<TodaPlantaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaPlantaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodaPlantaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
