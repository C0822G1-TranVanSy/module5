import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalUpdateComponent } from './medical-update.component';

describe('MedicalUpdateComponent', () => {
  let component: MedicalUpdateComponent;
  let fixture: ComponentFixture<MedicalUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
