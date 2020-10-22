import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MosaicoModalPage } from './mosaico-modal.page';

describe('MosaicoModalPage', () => {
  let component: MosaicoModalPage;
  let fixture: ComponentFixture<MosaicoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MosaicoModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MosaicoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
