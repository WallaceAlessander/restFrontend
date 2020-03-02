import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  data = {
    age: null,
    height: null,
    weight: null,
    geb: null
  };

  constructor(private dataService: DataService, private router: Router) { }


  ngOnInit(): void {
    this.data = this.dataService.getData();
    console.log(this.data);
  }

  editData(){
    this.dataService.editDataHttp(this.data)
      .subscribe(
        res => {
          this.router.navigate(['/data']);
        },
        err => console.log(err)
      )
  }

}
