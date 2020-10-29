import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RaicessanasplantaPage } from './raicessanasplanta.page';

describe('RaicessanasplantaPage', () => {
  let component: RaicessanasplantaPage;
  let fixture: ComponentFixture<RaicessanasplantaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaicessanasplantaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RaicessanasplantaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
