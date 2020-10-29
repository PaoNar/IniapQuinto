import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Respuesta3hojasPage } from './respuesta3hojas.page';

describe('Respuesta3hojasPage', () => {
  let component: Respuesta3hojasPage;
  let fixture: ComponentFixture<Respuesta3hojasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Respuesta3hojasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Respuesta3hojasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
