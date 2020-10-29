import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresenciabolitasraizImagePage } from './presenciabolitasraiz-image.page';

describe('PresenciabolitasraizImagePage', () => {
  let component: PresenciabolitasraizImagePage;
  let fixture: ComponentFixture<PresenciabolitasraizImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenciabolitasraizImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresenciabolitasraizImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
