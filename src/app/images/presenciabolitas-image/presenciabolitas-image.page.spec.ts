import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresenciabolitasImagePage } from './presenciabolitas-image.page';

describe('PresenciabolitasImagePage', () => {
  let component: PresenciabolitasImagePage;
  let fixture: ComponentFixture<PresenciabolitasImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenciabolitasImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresenciabolitasImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
