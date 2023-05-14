import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerdialogComponent } from './trailerdialog.component';

describe('TrailerdialogComponent', () => {
  let component: TrailerdialogComponent;
  let fixture: ComponentFixture<TrailerdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailerdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailerdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
