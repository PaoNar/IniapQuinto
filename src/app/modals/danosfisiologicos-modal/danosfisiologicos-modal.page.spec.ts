import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DanosfisiologicosModalPage } from './danosfisiologicos-modal.page';

describe('DanosfisiologicosModalPage', () => {
  let component: DanosfisiologicosModalPage;
  let fixture: ComponentFixture<DanosfisiologicosModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanosfisiologicosModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DanosfisiologicosModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
