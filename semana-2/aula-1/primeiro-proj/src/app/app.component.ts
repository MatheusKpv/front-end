import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  titulo = 'Testando Titulo';
  teste = 'google.com';

  testeFunc(event: any) {
    console.log(event)
    console.log('deu boa')
  }

  inputContent = 'gvwfeek';
}
