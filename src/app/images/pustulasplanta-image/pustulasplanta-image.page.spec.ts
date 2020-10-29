import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PustulasplantaImagePage } from './pustulasplanta-image.page';

describe('PustulasplantaImagePage', () => {
  let component: PustulasplantaImagePage;
  let fixture: ComponentFixture<PustulasplantaImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PustulasplantaImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PustulasplantaImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
