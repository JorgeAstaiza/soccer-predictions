import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesResultsComponent } from './matches-results.component';

describe('MatchesResultsComponent', () => {
  let component: MatchesResultsComponent;
  let fixture: ComponentFixture<MatchesResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchesResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatchesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
