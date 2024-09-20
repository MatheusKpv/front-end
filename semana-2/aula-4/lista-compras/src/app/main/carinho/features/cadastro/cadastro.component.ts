import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarinhoService } from '../../services/carinho.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Carinho } from '../../models/carinho';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit{
  formulario!: FormGroup;
  carinhoEdit?: Carinho = {
    id: undefined,
    nome: undefined,
    preco: undefined,
    quantidade: undefined
  };

  constructor(private service: CarinhoService, private router: Router, private buider: FormBuilder, private route: ActivatedRoute) {};

  ngOnInit(): void {
    this.formulario = this.buider.group({
      nome: [null, Validators.required],
      preco: [null, Validators.required],
      quantidade: [null, Validators.required]
    })

    this.route.params.subscribe(p => {
      const paramId = p['id'];
      if (paramId) {
        this.carinhoEdit = this.service.findById(paramId);
        if (this.carinhoEdit) {
          this.formulario.patchValue({
            nome: this.carinhoEdit.nome,
            preco: this.carinhoEdit.preco,
            quantidade: this.carinhoEdit.quantidade
          })
        }
      }
    })
  }

  cadastra() {
    this.carinhoEdit!.nome = this.formulario.value.nome;
    this.carinhoEdit!.preco = this.formulario.value.preco;
    this.carinhoEdit!.quantidade = this.formulario.value.quantidade;
    this.service.cadastra(this.carinhoEdit!);
    this.router.navigate(['carinho/lista'])
  }
}
