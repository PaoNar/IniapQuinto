import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManchasplateadoImagePage } from './manchasplateado-image.page';

describe('ManchasplateadoImagePage', () => {
  let component: ManchasplateadoImagePage;
  let fixture: ComponentFixture<ManchasplateadoImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManchasplateadoImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManchasplateadoImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
