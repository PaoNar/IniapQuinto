import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CavidadinternaImagePage } from './cavidadinterna-image.page';

describe('CavidadinternaImagePage', () => {
  let component: CavidadinternaImagePage;
  let fixture: ComponentFixture<CavidadinternaImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CavidadinternaImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CavidadinternaImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
