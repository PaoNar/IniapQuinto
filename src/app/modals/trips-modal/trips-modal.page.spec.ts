import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TripsModalPage } from './trips-modal.page';

describe('TripsModalPage', () => {
  let component: TripsModalPage;
  let fixture: ComponentFixture<TripsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TripsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
