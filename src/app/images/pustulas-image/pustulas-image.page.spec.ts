import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PustulasImagePage } from './pustulas-image.page';

describe('PustulasImagePage', () => {
  let component: PustulasImagePage;
  let fixture: ComponentFixture<PustulasImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PustulasImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PustulasImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
