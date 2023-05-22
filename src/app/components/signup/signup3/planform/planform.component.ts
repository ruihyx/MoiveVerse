import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-planform',
  templateUrl: './planform.component.html',
  styleUrls: ['./planform.component.scss']
})
export class PlanformComponent {
  selectedPlan: number | null = null;
  @Output() submitPlan: EventEmitter<number> = new EventEmitter<number>()
  plans = [
    {
      header: "Standard with ads",
      price: "6.99",
      video: "Great",
      resolution: "1080p",
      device: true,
      download: false
    },
    {
      header: "Standard",
      price: "15.49",
      video: "Great",
      resolution: "1080p",
      device: true,
      download: true
    },
    {
      header: "Premium",
      price: "19.99",
      video: "Best",
      resolution: "4K+HDR",
      device: true,
      download: true
    }
  ];
  constructor(){

  }

  selectPlan(planIndex: number): void {
    this.selectedPlan = planIndex;
    console.log(this.selectedPlan)
    this.submitPlan.emit(planIndex);
  }


}
