import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PudricionImagePage } from './pudricion-image.page';

describe('PudricionImagePage', () => {
  let component: PudricionImagePage;
  let fixture: ComponentFixture<PudricionImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PudricionImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PudricionImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
