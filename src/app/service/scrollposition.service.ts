import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollpositionService {
  setScroll(url: string, position: [number, number]): void {
    sessionStorage.setItem(`scrollPositions_${url}`, JSON.stringify(position));
  }

  getScroll(url: string): [number, number] | null {
    const position = sessionStorage.getItem(`scrollPositions_${url}`);
    return position ? JSON.parse(position) : null;
  }


}