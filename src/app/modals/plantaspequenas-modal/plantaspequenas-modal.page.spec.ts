import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlantaspequenasModalPage } from './plantaspequenas-modal.page';

describe('PlantaspequenasModalPage', () => {
  let component: PlantaspequenasModalPage;
  let fixture: ComponentFixture<PlantaspequenasModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantaspequenasModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantaspequenasModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
