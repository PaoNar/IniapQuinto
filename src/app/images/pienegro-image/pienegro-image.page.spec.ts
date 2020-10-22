import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PienegroImagePage } from './pienegro-image.page';

describe('PienegroImagePage', () => {
  let component: PienegroImagePage;
  let fixture: ComponentFixture<PienegroImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PienegroImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PienegroImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
