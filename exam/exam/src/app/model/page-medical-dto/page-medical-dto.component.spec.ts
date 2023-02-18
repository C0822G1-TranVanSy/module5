import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMedicalDtoComponent } from './page-medical-dto.component';

describe('PageMedicalDtoComponent', () => {
  let component: PageMedicalDtoComponent;
  let fixture: ComponentFixture<PageMedicalDtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMedicalDtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMedicalDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
