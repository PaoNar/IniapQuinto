import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlantaImagePage } from './planta-image.page';

describe('PlantaImagePage', () => {
  let component: PlantaImagePage;
  let fixture: ComponentFixture<PlantaImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantaImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantaImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
