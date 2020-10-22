import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsectosModalPage } from './insectos-modal.page';

describe('InsectosModalPage', () => {
  let component: InsectosModalPage;
  let fixture: ComponentFixture<InsectosModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsectosModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsectosModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
