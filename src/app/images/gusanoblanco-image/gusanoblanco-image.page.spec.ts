import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GusanoblancoImagePage } from './gusanoblanco-image.page';

describe('GusanoblancoImagePage', () => {
  let component: GusanoblancoImagePage;
  let fixture: ComponentFixture<GusanoblancoImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GusanoblancoImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GusanoblancoImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
