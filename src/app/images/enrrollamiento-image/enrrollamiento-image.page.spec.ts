import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnrrollamientoImagePage } from './enrrollamiento-image.page';

describe('EnrrollamientoImagePage', () => {
  let component: EnrrollamientoImagePage;
  let fixture: ComponentFixture<EnrrollamientoImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrrollamientoImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnrrollamientoImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
