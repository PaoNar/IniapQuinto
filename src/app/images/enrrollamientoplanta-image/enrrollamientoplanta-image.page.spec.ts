import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnrrollamientoplantaImagePage } from './enrrollamientoplanta-image.page';

describe('EnrrollamientoplantaImagePage', () => {
  let component: EnrrollamientoplantaImagePage;
  let fixture: ComponentFixture<EnrrollamientoplantaImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrrollamientoplantaImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnrrollamientoplantaImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
