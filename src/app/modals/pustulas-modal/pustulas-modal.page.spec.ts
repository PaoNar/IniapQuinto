import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PustulasModalPage } from './pustulas-modal.page';

describe('PustulasModalPage', () => {
  let component: PustulasModalPage;
  let fixture: ComponentFixture<PustulasModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PustulasModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PustulasModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
