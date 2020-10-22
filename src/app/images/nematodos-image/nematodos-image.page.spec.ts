import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NematodosImagePage } from './nematodos-image.page';

describe('NematodosImagePage', () => {
  let component: NematodosImagePage;
  let fixture: ComponentFixture<NematodosImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NematodosImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NematodosImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
