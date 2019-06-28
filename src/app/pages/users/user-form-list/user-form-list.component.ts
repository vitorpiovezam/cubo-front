import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-form-list',
  templateUrl: './user-form-list.component.html',
  styleUrls: ['./user-form-list.component.less']
})
export class UserFormListComponent implements OnInit {

  userForm: FormGroup;
  users: User[] = [];

  constructor(private formBuilder: FormBuilder, public userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();

    this.buildUserForm();
  }

  public buildUserForm() {
    this.userForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      participation: [null, [Validators.required]]
    });
  }

  public getUsers() {
    this.userService.getAll().subscribe(
      users => this.users = users,
    );

  }

  public submit() {
    let user: User = Object.assign(new User(), this.userForm.value);
    
    this.userService.create(user).subscribe(
      user => this.users.push(user[0])
    );
  }
}
