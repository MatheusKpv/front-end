import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from '../../service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit{
  formulario!: FormGroup;
  produtoEdit?: Produto = {
    id: undefined,
    nome: undefined,
    preco: undefined
  };

  constructor(private service: ProdutoService, private router: Router, private buider: FormBuilder, private route: ActivatedRoute) {};

  ngOnInit(): void {
    this.formulario = this.buider.group({
      nome: [null, Validators.required],
      preco: [null, Validators.required]
    })

    this.route.params.subscribe(p => {
      const paramId = p['id'];
      if (paramId) {
        this.produtoEdit = this.service.findById(paramId);
        if (this.produtoEdit) {
          this.formulario.patchValue({
            nome: this.produtoEdit.nome,
            preco: this.produtoEdit.preco
          })
        }
      }
    })
  }

  cadastra() {
    this.produtoEdit!.nome = this.formulario.value.nome;
    this.produtoEdit!.preco = this.formulario.value.preco;
    this.service.cadastra(this.produtoEdit!);
    this.router.navigate(['produto/lista'])
  }
}
