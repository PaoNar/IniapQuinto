import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NematodosModalPage } from './nematodos-modal.page';

describe('NematodosModalPage', () => {
  let component: NematodosModalPage;
  let fixture: ComponentFixture<NematodosModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NematodosModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NematodosModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
