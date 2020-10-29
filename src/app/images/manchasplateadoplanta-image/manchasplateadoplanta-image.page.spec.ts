import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManchasplateadoplantaImagePage } from './manchasplateadoplanta-image.page';

describe('ManchasplateadoplantaImagePage', () => {
  let component: ManchasplateadoplantaImagePage;
  let fixture: ComponentFixture<ManchasplateadoplantaImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManchasplateadoplantaImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManchasplateadoplantaImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
