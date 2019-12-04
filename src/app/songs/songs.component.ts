import { Component, OnInit } from '@angular/core';
import { SongService } from './song.service';

interface Song  {
       name:string;
      artist :string,
      url : string
}

interface Response {
  results: {
    trackmatches: {
      track:Array<Song> 
    }
  }
}

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  newSong = '';
  songs:Array<Song> = null;

  constructor(private songService: SongService) {

    this.songs = [];

   }

  ngOnInit() {
  }

  searchSong(){
    this.songService.searchSong(this.newSong)
    .then((response: Response) => this.songs = response.results.trackmatches.track)
    .catch(error => console.log(error));
  }

}
