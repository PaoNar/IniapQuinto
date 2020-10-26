import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorazonhuecoImagePage } from './corazonhueco-image.page';

describe('CorazonhuecoImagePage', () => {
  let component: CorazonhuecoImagePage;
  let fixture: ComponentFixture<CorazonhuecoImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorazonhuecoImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorazonhuecoImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
