import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TripsImagePage } from './trips-image.page';

describe('TripsImagePage', () => {
  let component: TripsImagePage;
  let fixture: ComponentFixture<TripsImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TripsImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
