import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorazonhuecoModalPage } from './corazonhueco-modal.page';

describe('CorazonhuecoModalPage', () => {
  let component: CorazonhuecoModalPage;
  let fixture: ComponentFixture<CorazonhuecoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorazonhuecoModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorazonhuecoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
