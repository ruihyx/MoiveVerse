import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanformComponent } from './planform.component';

describe('PlanformComponent', () => {
  let component: PlanformComponent;
  let fixture: ComponentFixture<PlanformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
