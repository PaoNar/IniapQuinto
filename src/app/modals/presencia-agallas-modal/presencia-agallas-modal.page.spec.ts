import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresenciaAgallasModalPage } from './presencia-agallas-modal.page';

describe('PresenciaAgallasModalPage', () => {
  let component: PresenciaAgallasModalPage;
  let fixture: ComponentFixture<PresenciaAgallasModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenciaAgallasModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresenciaAgallasModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
