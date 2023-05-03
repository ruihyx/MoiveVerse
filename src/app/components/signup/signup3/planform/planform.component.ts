import { Component } from '@angular/core';

@Component({
  selector: 'app-planform',
  templateUrl: './planform.component.html',
  styleUrls: ['./planform.component.scss']
})
export class PlanformComponent {
  selectedPlan: number | null = null;
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

  selectPlan(planIndex: number): void {
    this.selectedPlan = planIndex;
  }


}
