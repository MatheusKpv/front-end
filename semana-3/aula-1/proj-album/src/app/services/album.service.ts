import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  findAlbuns() {
    return this.http.get(`https://jsonplaceholder.typicode.com/albums`);
  }

  constructor(private http: HttpClient) { }

  findById(id: number) {
    const params = new HttpParams().set('albumId', id);
    return this.http.get(`https://jsonplaceholder.typicode.com/photos`, {params});
  }
}
