import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CostraNegraModalPage } from './costra-negra-modal.page';

describe('CostraNegraModalPage', () => {
  let component: CostraNegraModalPage;
  let fixture: ComponentFixture<CostraNegraModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostraNegraModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CostraNegraModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
