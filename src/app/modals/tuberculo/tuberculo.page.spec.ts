import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TuberculoPage } from './tuberculo.page';

describe('TuberculoPage', () => {
  let component: TuberculoPage;
  let fixture: ComponentFixture<TuberculoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuberculoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TuberculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
