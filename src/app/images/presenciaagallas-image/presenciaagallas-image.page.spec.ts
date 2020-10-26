import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresenciaagallasImagePage } from './presenciaagallas-image.page';

describe('PresenciaagallasImagePage', () => {
  let component: PresenciaagallasImagePage;
  let fixture: ComponentFixture<PresenciaagallasImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenciaagallasImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresenciaagallasImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
