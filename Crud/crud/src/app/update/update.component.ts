import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ApiService } from '../api.service';
import { datamodel } from '../list/model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'] // Corrected property name to styleUrls
})
export class UpdateComponent implements OnInit {
  public detaid!: number;
public employee:undefined|datamodel;
  constructor(private activate: ActivatedRoute, private router: Router,private api:ApiService) {}

  ngOnInit(): void {
    this.activate.paramMap.subscribe((params: Params) => {
      this.detaid = params['get']('id'); // 'get' method is not needed here
      // console.log("data is delete", this.detaid);
    })
this.api.fetchdata(this.detaid).subscribe((data:datamodel)=>{
this.employee= data;

})
  }
update(){
  this.api.updateempoloyee(this.employee,this.detaid).subscribe((res:datamodel)=>{
    this.router.navigate(["/"])
  })
}


}
