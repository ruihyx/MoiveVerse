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

  // constructor(

  //   public dialogRef: MatDialogRef<TrailerdialogComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: { videos: Video[]}){


  // }

  // ngOnInit(): void {
  //   this.videos = this.data.videos;
  //   this.selectedVideo = this.videos.length > 0 ? this.videos[0].key:null;
 
  // }

  // closeDialog(){
  //   this.dialogRef.close();
  // }
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) { 
  
  }
  ngOnInit(): void {
    // if data has trailers property and it is an array
    if(this.data && this.data.trailers && Array.isArray(this.data.trailers)){
      this.trailers = this.data.trailers;
      // set the first trailer's id as the initial videoId
      if(this.trailers.length > 0){
        this.videoId = this.trailers[0].key;
      }
    }
    // this.trailers = this.data.trailers;
    // if (this.trailers.length > 0) {
    //   this.setVideoId(this.trailers[0]);
    // }
  }

  setVideoId(trailer: any) {
    this.videoId = trailer.key;
  }

}
