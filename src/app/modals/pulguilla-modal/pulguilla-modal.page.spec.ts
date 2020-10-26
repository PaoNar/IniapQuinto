import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PulguillaModalPage } from './pulguilla-modal.page';

describe('PulguillaModalPage', () => {
  let component: PulguillaModalPage;
  let fixture: ComponentFixture<PulguillaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulguillaModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PulguillaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
