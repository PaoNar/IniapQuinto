import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngrosamientoImagePage } from './engrosamiento-image.page';

describe('EngrosamientoImagePage', () => {
  let component: EngrosamientoImagePage;
  let fixture: ComponentFixture<EngrosamientoImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngrosamientoImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngrosamientoImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
