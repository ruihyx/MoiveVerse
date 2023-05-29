import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollpositionService {
  // private positionState: any = {};
  // private positionState$ = new BehaviorSubject(this.positionState)

  // get positions(){
  //   return this.positionState$.value;
  // }

  // setPositionState(name:string, x:number, y: number) {
  //   this.positionState[name] = [x,y];
  //   this.positionState$.next(this.positionState)

  // }

  setScroll(url: string, position: [number, number]): void {
  
    sessionStorage.setItem(`scrollPositions_${url}`, JSON.stringify(position));
  }

  getScroll(url: string): [number, number] | null {
    const position = sessionStorage.getItem(`scrollPositions_${url}`);
    return position ? JSON.parse(position) : null;
  }


}