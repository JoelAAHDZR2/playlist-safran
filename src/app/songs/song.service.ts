import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpclient: HttpClient) { 
    
  }


  searchSong(name:string){
    const api_key = '291279da08301e10d6434267511d72f2'
    const Api_Url = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${name}&api_key=${api_key}&format=json`;
    return this.httpclient.get(Api_Url).toPromise();
  }
}
