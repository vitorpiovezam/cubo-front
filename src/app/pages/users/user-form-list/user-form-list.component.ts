import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { Chart } from 'chart.js';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-form-list',
  templateUrl: './user-form-list.component.html',
  styleUrls: ['./user-form-list.component.less']
})
export class UserFormListComponent implements OnInit {

  userForm: FormGroup;
  users: User[] = [];

  labels: String[] = [];
  data: Number[] = [];
  colors: String[] = [];

  constructor(private formBuilder: FormBuilder, public userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
    this.buildUserForm();
    this.buildGraph();
  }

  public buildUserForm() {
    this.userForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      participation: [null, [Validators.required]]
    });
  }

  public buildGraph() {
    this.labels = ['salve','brota'];
    this.data = [10,20];
  }

  public getUsers() {
    this.userService.getAll().subscribe(
      users => this.users = users,
      err => new Error() 
    );
  }

  public submit() {
    let user: User = Object.assign(new User(), this.userForm.value);

    this.userService.create(user).subscribe(
      user => this.users.push(user[0])
    );
  }

  public getRandomColor() {
    var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
      '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
      '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
      '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
      '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
      '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
      '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
      '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
      '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
      '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

    return colorArray[Math.random() * (colorArray.length - 0)];
  }
}
