import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngrosamientoModalPage } from './engrosamiento-modal.page';

describe('EngrosamientoModalPage', () => {
  let component: EngrosamientoModalPage;
  let fixture: ComponentFixture<EngrosamientoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngrosamientoModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngrosamientoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
