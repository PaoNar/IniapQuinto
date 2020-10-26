import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PsilidosImagePage } from './psilidos-image.page';

describe('PsilidosImagePage', () => {
  let component: PsilidosImagePage;
  let fixture: ComponentFixture<PsilidosImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsilidosImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PsilidosImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
