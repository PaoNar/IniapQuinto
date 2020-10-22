import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrietasModalPage } from './grietas-modal.page';

describe('GrietasModalPage', () => {
  let component: GrietasModalPage;
  let fixture: ComponentFixture<GrietasModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrietasModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrietasModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
