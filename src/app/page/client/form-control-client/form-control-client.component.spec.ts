import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlClientComponent } from './form-control-client.component';

describe('FormControlClientComponent', () => {
  let component: FormControlClientComponent;
  let fixture: ComponentFixture<FormControlClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormControlClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
