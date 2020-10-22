import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresenciaBolitasModalPage } from './presencia-bolitas-modal.page';

describe('PresenciaBolitasModalPage', () => {
  let component: PresenciaBolitasModalPage;
  let fixture: ComponentFixture<PresenciaBolitasModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenciaBolitasModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresenciaBolitasModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
