import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsectosImagePage } from './insectos-image.page';

describe('InsectosImagePage', () => {
  let component: InsectosImagePage;
  let fixture: ComponentFixture<InsectosImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsectosImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsectosImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
