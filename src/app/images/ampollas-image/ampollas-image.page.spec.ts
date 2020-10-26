import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmpollasImagePage } from './ampollas-image.page';

describe('AmpollasImagePage', () => {
  let component: AmpollasImagePage;
  let fixture: ComponentFixture<AmpollasImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmpollasImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmpollasImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
