import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private URL = 'http://localhost:3000';
  email = null;
  data = {
    id: "",
    firstName: "",
    lastName: "",
    userName: "",
    age: null,
    height: null,
    weight: null,
    geb: null
  };

  constructor(private http: HttpClient) { }

  getDataHttp(){
    this.email = localStorage.getItem('email');
    return this.http.get<any>(`${this.URL }/data/${this.email}`);
  }

  setData(json: any) {
    console.log(json);
    this.data = json;
    console.log(this.data);
  }

  getData() {
    return this.data;
  }

  editDataHttp(datasend){
    console.log(datasend);
    console.log(this.data.id);
    return this.http.put(`${this.URL }/dataupdate/${this.data.id}`, datasend);
  }

}
