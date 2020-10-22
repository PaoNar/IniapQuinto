import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PuntaMoradaModalPage } from './punta-morada-modal.page';

describe('PuntaMoradaModalPage', () => {
  let component: PuntaMoradaModalPage;
  let fixture: ComponentFixture<PuntaMoradaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntaMoradaModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PuntaMoradaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
