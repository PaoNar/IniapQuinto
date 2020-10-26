import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TuberculoImagePage } from './tuberculo-image.page';

describe('TuberculoImagePage', () => {
  let component: TuberculoImagePage;
  let fixture: ComponentFixture<TuberculoImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuberculoImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TuberculoImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
