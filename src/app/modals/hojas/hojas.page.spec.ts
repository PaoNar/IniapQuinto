import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HojasPage } from './hojas.page';

describe('HojasPage', () => {
  let component: HojasPage;
  let fixture: ComponentFixture<HojasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HojasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
