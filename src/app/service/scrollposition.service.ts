import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollpositionService {
  private positions = new Map<string, [number, number]>();

  setScroll(url: string, position: [number, number]): void {
    this.positions.set(url, position);
  }

  getScroll(url: string): [number, number] | undefined {
    return this.positions.get(url);
  }

}