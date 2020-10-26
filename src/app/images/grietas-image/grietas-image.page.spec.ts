import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrietasImagePage } from './grietas-image.page';

describe('GrietasImagePage', () => {
  let component: GrietasImagePage;
  let fixture: ComponentFixture<GrietasImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrietasImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrietasImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
