import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Respuesta4plantaPage } from './respuesta4planta.page';

describe('Respuesta4plantaPage', () => {
  let component: Respuesta4plantaPage;
  let fixture: ComponentFixture<Respuesta4plantaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Respuesta4plantaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Respuesta4plantaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
