import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManchasnegrasplantaImagePage } from './manchasnegrasplanta-image.page';

describe('ManchasnegrasplantaImagePage', () => {
  let component: ManchasnegrasplantaImagePage;
  let fixture: ComponentFixture<ManchasnegrasplantaImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManchasnegrasplantaImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManchasnegrasplantaImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
