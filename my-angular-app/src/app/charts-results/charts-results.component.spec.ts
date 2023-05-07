import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsResultsComponent } from './charts-results.component';

describe('ChartsResultsComponent', () => {
  let component: ChartsResultsComponent;
  let fixture: ComponentFixture<ChartsResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsResultsComponent]
    });
    fixture = TestBed.createComponent(ChartsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
