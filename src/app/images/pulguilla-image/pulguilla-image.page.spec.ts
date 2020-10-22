import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PulguillaImagePage } from './pulguilla-image.page';

describe('PulguillaImagePage', () => {
  let component: PulguillaImagePage;
  let fixture: ComponentFixture<PulguillaImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulguillaImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PulguillaImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
