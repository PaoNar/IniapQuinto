import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolillaImagePage } from './polilla-image.page';

describe('PolillaImagePage', () => {
  let component: PolillaImagePage;
  let fixture: ComponentFixture<PolillaImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolillaImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolillaImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
