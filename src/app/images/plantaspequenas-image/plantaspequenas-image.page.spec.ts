import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlantaspequenasImagePage } from './plantaspequenas-image.page';

describe('PlantaspequenasImagePage', () => {
  let component: PlantaspequenasImagePage;
  let fixture: ComponentFixture<PlantaspequenasImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantaspequenasImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantaspequenasImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
