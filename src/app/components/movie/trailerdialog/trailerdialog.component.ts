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
  videos?: any[];
  selectedVideo?: string;

  constructor(

    public dialogRef: MatDialogRef<TrailerdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { videos: Video[]}){


  }

  ngOnInit(): void {
    this.videos = this.data.videos;
    this.selectedVideo = this.videos.length > 0 ? this.videos[0].key:null;
 
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
