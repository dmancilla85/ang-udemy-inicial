import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GeolocationService } from './geolocation.service';

@Injectable()
export class SpotifyService {

  token: string = "BQBQA3eGl7j57Q5HcvcpUkg9kqT9G9xXdg1B6y9a2CdZDEJxpdMXzTeexxiLLFuzDrWRZYl0ng8GvTQR55A";


  constructor(private http: HttpClient,
              private geo: GeolocationService) {
    //console.log("Spotify service listo")
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => data[`albums`].items))
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => data[`artists`].items))

  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`)
      //.pipe(map(data => data[`artists`].items))

  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=ar`)
      .pipe(map(data => data[`tracks`]));
  }
}
