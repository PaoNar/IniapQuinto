import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HojasminadasPage } from './hojasminadas.page';

describe('HojasminadasPage', () => {
  let component: HojasminadasPage;
  let fixture: ComponentFixture<HojasminadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojasminadasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HojasminadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
