import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  findById(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos/?albumId=${id}`)
  }
}
