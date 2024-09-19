import { Component } from '@angular/core';
import { Produto } from '../../models/produto';
import { ProdutoService } from '../../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  nomeInput: string = '';
  precoInput?: number = undefined;
  produtoEdit?: Produto = undefined;

  constructor(private produtoService: ProdutoService, private router: Router, private route: ActivatedRoute) { };

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      const paramId = p['id'];
      if (paramId) {
        this.produtoEdit = this.produtoService.findById(paramId);
        if (this.produtoEdit) {
          this.nomeInput = this.produtoEdit.nome;
          this.precoInput = this.produtoEdit.preco;
        } else {
          this.router.navigate(['/produto/listagem']);
        }
      };
    })
  }

  cadastra() {
    const produto: Produto = {
      id: this.produtoEdit ? this.produtoEdit.id : undefined,
      nome: this.nomeInput,
      preco: this.precoInput
    }
    if (this.produtoEdit) {
      this.produtoService.atualiza(produto);
      this.produtoEdit = undefined;
    } else {
      this.produtoService.cadastra(produto);
    }
    this.router.navigate(['/produto/listagem']);
  }
}
