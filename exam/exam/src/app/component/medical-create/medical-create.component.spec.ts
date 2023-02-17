import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalCreateComponent } from './medical-create.component';

describe('MedicalCreateComponent', () => {
  let component: MedicalCreateComponent;
  let fixture: ComponentFixture<MedicalCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
