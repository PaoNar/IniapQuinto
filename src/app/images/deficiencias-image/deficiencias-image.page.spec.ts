import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeficienciasImagePage } from './deficiencias-image.page';

describe('DeficienciasImagePage', () => {
  let component: DeficienciasImagePage;
  let fixture: ComponentFixture<DeficienciasImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeficienciasImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeficienciasImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
