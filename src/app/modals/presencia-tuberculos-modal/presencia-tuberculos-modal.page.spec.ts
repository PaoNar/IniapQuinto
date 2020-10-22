import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresenciaTuberculosModalPage } from './presencia-tuberculos-modal.page';

describe('PresenciaTuberculosModalPage', () => {
  let component: PresenciaTuberculosModalPage;
  let fixture: ComponentFixture<PresenciaTuberculosModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenciaTuberculosModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresenciaTuberculosModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
