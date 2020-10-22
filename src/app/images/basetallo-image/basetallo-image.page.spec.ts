import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BasetalloImagePage } from './basetallo-image.page';

describe('BasetalloImagePage', () => {
  let component: BasetalloImagePage;
  let fixture: ComponentFixture<BasetalloImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasetalloImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BasetalloImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
