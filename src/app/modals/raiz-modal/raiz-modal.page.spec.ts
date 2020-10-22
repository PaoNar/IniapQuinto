import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RaizModalPage } from './raiz-modal.page';

describe('RaizModalPage', () => {
  let component: RaizModalPage;
  let fixture: ComponentFixture<RaizModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaizModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RaizModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
