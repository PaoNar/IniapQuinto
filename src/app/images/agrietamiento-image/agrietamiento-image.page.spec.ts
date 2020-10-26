import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgrietamientoImagePage } from './agrietamiento-image.page';

describe('AgrietamientoImagePage', () => {
  let component: AgrietamientoImagePage;
  let fixture: ComponentFixture<AgrietamientoImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrietamientoImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgrietamientoImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
