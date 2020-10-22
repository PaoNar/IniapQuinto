import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LanchaImagePage } from './lancha-image.page';

describe('LanchaImagePage', () => {
  let component: LanchaImagePage;
  let fixture: ComponentFixture<LanchaImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanchaImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LanchaImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
