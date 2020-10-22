import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GusanoBlancoModalPage } from './gusano-blanco-modal.page';

describe('GusanoBlancoModalPage', () => {
  let component: GusanoBlancoModalPage;
  let fixture: ComponentFixture<GusanoBlancoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GusanoBlancoModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GusanoBlancoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
