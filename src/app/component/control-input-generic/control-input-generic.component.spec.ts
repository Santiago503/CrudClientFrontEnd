import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlInputGenericComponent } from './control-input-generic.component';

describe('ControlInputGenericComponent', () => {
  let component: ControlInputGenericComponent;
  let fixture: ComponentFixture<ControlInputGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlInputGenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlInputGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
