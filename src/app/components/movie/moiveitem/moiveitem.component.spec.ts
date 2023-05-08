import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoiveitemComponent } from './moiveitem.component';

describe('MoiveitemComponent', () => {
  let component: MoiveitemComponent;
  let fixture: ComponentFixture<MoiveitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoiveitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoiveitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
