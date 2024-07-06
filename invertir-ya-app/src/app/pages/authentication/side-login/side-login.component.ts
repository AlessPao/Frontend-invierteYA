import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { NgIf } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { Auth } from 'src/app/model/auth.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-side-login',
  standalone: true,
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './side-login.component.html',
})
export class AppSideLoginComponent {
  options = this.settings.getOptions();

  constructor(
    private settings: CoreService, 
    private router: Router,
    private authService: UserService,
    private _snackBar: MatSnackBar
    ) {}

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6), Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  get f() {
    return this.form.controls;
  }

  auth(){
    let auth : Auth = new Auth();
    auth.email = this.form.get('uname').value;
    auth.password = this.form.get('password').value;

    this.authService.login(auth).subscribe((res) => {
      sessionStorage.setItem('id', res.id);
      this._snackBar.open('Acceso autorizado', 'INFO', {duration: 2000});
      this.router.navigate(['/dashboard/contacts']);
    });
    
  }

  submit() {
    // console.log(this.form.value);
    this.router.navigate(['/dashboards/dashboard1']);
  }
}
