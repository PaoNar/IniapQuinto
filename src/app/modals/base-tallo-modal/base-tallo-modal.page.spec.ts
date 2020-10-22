import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaseTalloModalPage } from './base-tallo-modal.page';

describe('BaseTalloModalPage', () => {
  let component: BaseTalloModalPage;
  let fixture: ComponentFixture<BaseTalloModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseTalloModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaseTalloModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
