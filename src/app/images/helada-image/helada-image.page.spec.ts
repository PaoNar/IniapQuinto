import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeladaImagePage } from './helada-image.page';

describe('HeladaImagePage', () => {
  let component: HeladaImagePage;
  let fixture: ComponentFixture<HeladaImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeladaImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeladaImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
