import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EquilateroComponent } from './equilatero.component';

describe('EquilateroComponent', () => {
  let component: EquilateroComponent;
  let fixture: ComponentFixture<EquilateroComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EquilateroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquilateroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
