import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TalloPage } from './tallo.page';

describe('TalloPage', () => {
  let component: TalloPage;
  let fixture: ComponentFixture<TalloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TalloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
