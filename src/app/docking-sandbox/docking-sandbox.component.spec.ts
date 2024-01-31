import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockingSandboxComponent } from './docking-sandbox.component';

describe('DockingSandboxComponent', () => {
  let component: DockingSandboxComponent;
  let fixture: ComponentFixture<DockingSandboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockingSandboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DockingSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
