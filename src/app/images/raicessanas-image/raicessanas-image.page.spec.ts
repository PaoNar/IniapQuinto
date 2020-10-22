import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RaicessanasImagePage } from './raicessanas-image.page';

describe('RaicessanasImagePage', () => {
  let component: RaicessanasImagePage;
  let fixture: ComponentFixture<RaicessanasImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaicessanasImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RaicessanasImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
