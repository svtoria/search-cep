import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public adresses: any = [];
  public adress: Address = {
    cep: '',
  };

  constructor(private http: HttpClient) { }

  public search() {
    if (this.adress.cep === '') {
      alert('Insira um CEP')
      return;
    }

    this.http.get(`https://viacep.com.br/ws/${this.adress.cep}/json/`).subscribe(r => {
      this.adresses = r;
      console.log(r);
    });;

  }
}

interface Address {
  cep: string;
}
