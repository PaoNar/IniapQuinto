import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HojasMinadasModalPage } from './hojas-minadas-modal.page';

describe('HojasMinadasModalPage', () => {
  let component: HojasMinadasModalPage;
  let fixture: ComponentFixture<HojasMinadasModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojasMinadasModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HojasMinadasModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
