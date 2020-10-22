import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoscaminadoraImagePage } from './moscaminadora-image.page';

describe('MoscaminadoraImagePage', () => {
  let component: MoscaminadoraImagePage;
  let fixture: ComponentFixture<MoscaminadoraImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoscaminadoraImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoscaminadoraImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
