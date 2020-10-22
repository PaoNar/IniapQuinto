import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SarnapolvorientaModalPage } from './sarnapolvorienta-modal.page';

describe('SarnapolvorientaModalPage', () => {
  let component: SarnapolvorientaModalPage;
  let fixture: ComponentFixture<SarnapolvorientaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SarnapolvorientaModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SarnapolvorientaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
