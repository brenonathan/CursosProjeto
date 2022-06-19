import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CursosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CursosProvider Provider');
  }

  getCursosJson() {
    return this.http.get('assets/db/cursos.json');
  }

}
