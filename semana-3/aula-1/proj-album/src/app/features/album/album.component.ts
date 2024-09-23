import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss'
})
export class AlbumComponent implements OnInit {
  verificaParam(): any {
    return this.router.url.endsWith('/album');
  }
  listaFotos: any = [];
  listaAlbuns: any = [];

  constructor(private route: ActivatedRoute, private service: AlbumService, private router: Router) { };

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const id = param['id'];
      if (id) {
        this.service.findById(id).subscribe(fotos => {
          if (Object.keys(fotos).length === 0) {
            this.router.navigate(['/album']);
          } else {
            this.listaFotos = fotos;
          }
        });
      } else {
        this.service.findAlbuns().subscribe(albuns => {
          this.listaAlbuns = albuns
        })
      }
    })
  }
}
