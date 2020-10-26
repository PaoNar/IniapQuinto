import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RajadurasImagePage } from './rajaduras-image.page';

describe('RajadurasImagePage', () => {
  let component: RajadurasImagePage;
  let fixture: ComponentFixture<RajadurasImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RajadurasImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RajadurasImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
