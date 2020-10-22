import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManchasnegrasImagePage } from './manchasnegras-image.page';

describe('ManchasnegrasImagePage', () => {
  let component: ManchasnegrasImagePage;
  let fixture: ComponentFixture<ManchasnegrasImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManchasnegrasImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManchasnegrasImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
