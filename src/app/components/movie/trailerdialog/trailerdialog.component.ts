import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { YouTubePlayerModule } from '@angular/youtube-player';
import { Video } from 'src/app/service/movie.service';


@Component({
  selector: 'app-trailerdialog',
  templateUrl: './trailerdialog.component.html',
  styleUrls: ['./trailerdialog.component.scss']
})
export class TrailerdialogComponent implements OnInit {
  videoId: string = '';
  trailers: Video[] = [];
  currentIndex: number = 0;

 
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) { 
  
  }
  ngOnInit(): void {
    if(this.data && this.data.trailers && Array.isArray(this.data.trailers)){
      this.trailers = this.data.trailers;
      // set the first trailer's id as the initial videoId
      if(this.trailers.length > 0){
       this.setVideoId(this.trailers[this.currentIndex])
      }
    }
    // this.trailers = this.data.trailers;
    // if (this.trailers.length > 0) {
    //   this.setVideoId(this.trailers[0]);
    // }
  }

  setVideoId(trailer: any) {
    this.videoId = trailer.key;
    this.currentIndex = this.trailers.indexOf(trailer)
  }

  onNext() {
    if (this.hasNext()){
      this.setVideoId(this.trailers[this.currentIndex + 1])
    }
  }
  onPre(){
    if (this.hasPre()) {
      this.setVideoId(this.trailers[this.currentIndex - 1])
    }
  }

  hasPre(){
    return this.currentIndex > 0
  }

  hasNext(){
    return this.currentIndex < this.trailers.length - 1
  }

}
