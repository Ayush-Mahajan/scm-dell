import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtHomeComponent } from './at-home.component';

describe('AtHomeComponent', () => {
  let component: AtHomeComponent;
  let fixture: ComponentFixture<AtHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
