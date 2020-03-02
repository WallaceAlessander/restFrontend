import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

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

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getDataHttp()
      .subscribe(
        res => {
          this.data = res
          console.log(this.data);
          this.dataService.setData(this.data);
        },
        err => console.log(err)
      )
  }

  edit(){
    this.router.navigate(['/edit']);
  }

}
