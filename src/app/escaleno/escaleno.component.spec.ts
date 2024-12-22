import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EscalenoComponent } from './escaleno.component';

describe('EscalenoComponent', () => {
  let component: EscalenoComponent;
  let fixture: ComponentFixture<EscalenoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EscalenoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EscalenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
