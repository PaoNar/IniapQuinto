import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeladaModalPage } from './helada-modal.page';

describe('HeladaModalPage', () => {
  let component: HeladaModalPage;
  let fixture: ComponentFixture<HeladaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeladaModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeladaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
