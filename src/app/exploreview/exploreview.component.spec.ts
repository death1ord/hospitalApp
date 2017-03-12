import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreviewComponent } from './exploreview.component';

describe('ExploreviewComponent', () => {
  let component: ExploreviewComponent;
  let fixture: ComponentFixture<ExploreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
