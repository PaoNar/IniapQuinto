import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LanchaModalPage } from './lancha-modal.page';

describe('LanchaModalPage', () => {
  let component: LanchaModalPage;
  let fixture: ComponentFixture<LanchaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanchaModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LanchaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
