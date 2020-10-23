import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelAssessComponent } from './level-assess.component';

describe('LevelAssessComponent', () => {
  let component: LevelAssessComponent;
  let fixture: ComponentFixture<LevelAssessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelAssessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelAssessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
