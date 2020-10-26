import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresenciatuberculosImagePage } from './presenciatuberculos-image.page';

describe('PresenciatuberculosImagePage', () => {
  let component: PresenciatuberculosImagePage;
  let fixture: ComponentFixture<PresenciatuberculosImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenciatuberculosImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresenciatuberculosImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
