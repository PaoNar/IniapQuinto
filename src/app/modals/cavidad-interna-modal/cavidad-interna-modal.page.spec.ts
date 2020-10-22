import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CavidadInternaModalPage } from './cavidad-interna-modal.page';

describe('CavidadInternaModalPage', () => {
  let component: CavidadInternaModalPage;
  let fixture: ComponentFixture<CavidadInternaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CavidadInternaModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CavidadInternaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
