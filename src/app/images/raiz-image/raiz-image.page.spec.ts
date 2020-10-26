import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RaizImagePage } from './raiz-image.page';

describe('RaizImagePage', () => {
  let component: RaizImagePage;
  let fixture: ComponentFixture<RaizImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaizImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RaizImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
