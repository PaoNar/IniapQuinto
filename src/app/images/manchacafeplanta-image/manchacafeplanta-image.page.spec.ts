import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManchacafeplantaImagePage } from './manchacafeplanta-image.page';

describe('ManchacafeplantaImagePage', () => {
  let component: ManchacafeplantaImagePage;
  let fixture: ComponentFixture<ManchacafeplantaImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManchacafeplantaImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManchacafeplantaImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
