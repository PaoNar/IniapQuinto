import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresenciatuberculosPage } from './presenciatuberculos.page';

describe('PresenciatuberculosPage', () => {
  let component: PresenciatuberculosPage;
  let fixture: ComponentFixture<PresenciatuberculosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenciatuberculosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresenciatuberculosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
