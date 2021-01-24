import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonCapsuleComponent } from './moon-capsule.component';

describe('MoonCapsuleComponent', () => {
  let component: MoonCapsuleComponent;
  let fixture: ComponentFixture<MoonCapsuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoonCapsuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoonCapsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
