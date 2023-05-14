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
      header: "With Ads",
      price: "6.99",
      video: "Great",
      resolution: "1080p",
      device: true,
      download: false
    },
    {
      header: "Your Column 3 Header",
      price: "Your Price",
      video: "Your Video",
      resolution: "Your Resolution",
      device: true,
      download: false
    },
    {
      header: "Your Column 4 Header",
      price: "Your Price",
      video: "Your Video",
      resolution: "Your Resolution",
      device: true,
      download: false
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
