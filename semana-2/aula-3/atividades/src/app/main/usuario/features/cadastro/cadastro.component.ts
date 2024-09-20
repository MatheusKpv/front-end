import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent implements OnInit {
  formulario!: FormGroup;
  usuarioEdit?: Usuario = undefined;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuider: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.route.params.subscribe((p) => {
      const paramId = p['id'];
      if (paramId) {
        this.usuarioEdit = this.usuarioService.findById(paramId);
        if (this.usuarioEdit) {
          this.formulario.patchValue({
            nome: this.usuarioEdit.nome,
            email: this.usuarioEdit.email,
            fone: this.usuarioEdit.fone,
          });
        } else {
          this.router.navigate(['/usuario/listagem']);
        }
      }
    });
  }

  initForm() {
    this.formulario = this.formBuider.group({
      nome: [null, [Validators.required, this.validaNome]],
      email: [null, [Validators.required, Validators.email]],
      fone: [null, Validators.required],
    });
  }
  validaNome(control: AbstractControl): ValidationErrors | null {
    if(control.value) {
      // console.log(nome.replace(/[^a-zA-Z]/g, ''));
      // console.log(nome.match(/[a-zA-Z]/g)?.join(''));
      // console.log(control.value.match(/[a-zA-Z]/g)?.join('').length == control.value.length);

      if (control.value.match(/[a-zA-Z]/g)?.join('').length !== control.value.length) {
        console.log('jefw');

        return {nomeValido : true}
      }
    }
    return null;
  }
  // validaNome(control: FormGroup) {
  //   console.log(control)
  //   if (control.value.match(/[a-zA-Z]/g)?.join('').length !== control.value.length) {
  //     return { nomeValido: true };
  //   }
  //   return null
  //   console.log(control);
  // }
  cadastra() {
    const usuario: Usuario = {
      id: this.usuarioEdit ? this.usuarioEdit.id : undefined,
      nome: this.formulario.value.nome,
      email: this.formulario.value.email,
      fone: this.formulario.value.fone,
    };
    if (this.usuarioEdit) {
      this.usuarioService.atualiza(usuario);
      this.usuarioEdit = undefined;
    } else {
      this.usuarioService.cadastra(usuario);
    }
    this.router.navigate(['/usuario/listagem']);
  }

  // nomeInput: string = '';
  // emailInput: string = '';
  // foneInput: string = '';
  // usuarioEdit?: Usuario = undefined;

  // constructor(private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute) { };

  // ngOnInit(): void {
  //   this.route.params.subscribe(p => {
  //     const paramId = p['id'];
  //     if (paramId) {
  //       this.usuarioEdit = this.usuarioService.findById(paramId);
  //       if (this.usuarioEdit) {
  //         this.nomeInput = this.usuarioEdit.nome;
  //         this.emailInput = this.usuarioEdit.email;
  //         this.foneInput = this.usuarioEdit.fone;
  //       } else {
  //         this.router.navigate(['/usuario/listagem']);
  //       }
  //     };
  //   })
  // }
  // cadastra() {
  //   const usuario: Usuario = {
  //     id: this.usuarioEdit ? this.usuarioEdit.id : undefined,
  //     nome: this.nomeInput,
  //     email: this.emailInput,
  //     fone: this.foneInput
  //   }
  //   if (this.usuarioEdit) {
  //     this.usuarioService.atualiza(usuario);
  //     this.usuarioEdit = undefined;
  //   } else {
  //     this.usuarioService.cadastra(usuario);
  //   }
  //   this.router.navigate(['/usuario/listagem']);
  // }
}
