import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { datamodel } from './model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'] // Fixed typo here
})
export class ListComponent implements OnInit {
  employeefrom!: FormGroup;
  data: datamodel[] = []; // Initialize data array properly

  constructor(private formbuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.employeefrom = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      city: ['', Validators.required],
      Pincode: ['', Validators.required],
      Mobile: ['', Validators.required]
    });
    this.getemployee();
  }

  addempolyee(data: datamodel) {
    this.api.addemployee(data).subscribe(() => {
      this.employeefrom.reset();
      this.getemployee();
    });
  }

  getemployee() {
    this.api.getemployee().subscribe(res => {
      this.data = res;
    });
  }
}
