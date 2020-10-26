import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DanosfisiologicosImagePage } from './danosfisiologicos-image.page';

describe('DanosfisiologicosImagePage', () => {
  let component: DanosfisiologicosImagePage;
  let fixture: ComponentFixture<DanosfisiologicosImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanosfisiologicosImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DanosfisiologicosImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
