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
  return this.router.url.startsWith('/usuario');
}
  listaFotos: any = [];
  listaAlbuns: any = [];
  id: number | undefined = undefined;

  constructor(private route: ActivatedRoute, private service: AlbumService, private router: Router) {};

  ngOnInit(): void {
    this.route.params.subscribe(param => {
        this.id = param['id'];
        if (this.id) {
          this.service.findById(this.id).subscribe(fotos => {
            this.listaFotos = fotos
          });
        } else {
          this.id = undefined;
        }
        console.log(this.id);

    })
  }
}
