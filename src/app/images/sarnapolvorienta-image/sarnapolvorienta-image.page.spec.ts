import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SarnapolvorientaImagePage } from './sarnapolvorienta-image.page';

describe('SarnapolvorientaImagePage', () => {
  let component: SarnapolvorientaImagePage;
  let fixture: ComponentFixture<SarnapolvorientaImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SarnapolvorientaImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SarnapolvorientaImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
