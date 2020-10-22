import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PsilidosModalPage } from './psilidos-modal.page';

describe('PsilidosModalPage', () => {
  let component: PsilidosModalPage;
  let fixture: ComponentFixture<PsilidosModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsilidosModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PsilidosModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
