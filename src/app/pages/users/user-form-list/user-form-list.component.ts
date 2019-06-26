import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-user-form-list',
  templateUrl: './user-form-list.component.html',
  styleUrls: ['./user-form-list.component.less']
})
export class UserFormListComponent implements OnInit {

  userForm: FormGroup;
  users: User[];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildUserForm();
    this.getUsers();
  }

  public buildUserForm() {
    this.userForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      participation: [null, [Validators.required]]
    });
  }

  public getUsers() {

  }

  public submit() {
    
  }
}
