import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GusanoblancoModalPage } from './gusanoblanco-modal.page';

describe('GusanoblancoModalPage', () => {
  let component: GusanoblancoModalPage;
  let fixture: ComponentFixture<GusanoblancoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GusanoblancoModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GusanoblancoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
