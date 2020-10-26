import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TallosImagePage } from './tallos-image.page';

describe('TallosImagePage', () => {
  let component: TallosImagePage;
  let fixture: ComponentFixture<TallosImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallosImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TallosImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
