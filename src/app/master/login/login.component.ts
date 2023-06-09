import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'reminder';
  validateForm!: FormGroup;
  constructor(private _fb: FormBuilder,private notification: NzNotificationService,private router: Router) {}
  ngOnInit(): void {
    this.createForm();
  }
  createForm(): void {
    this.validateForm = this._fb.group({
      name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      password: new FormControl(null, Validators.required),
    });
  }

  onClick() {
    if ( this.validateForm.get('name')?.value==='admin' || this.validateForm.get('password')?.value==='admin'){
      console.log('eeee')
      this.router.navigate(['/', 'users']);
      this.notification.create(
        'success',
        'Başarılı giriş yapıldı',
        'Sisteme giriş yapıldı.'
      );
    }else{
      console.log('asfsdaf')
      this.notification.create(
        'error',
        'Lütfen kullanıcı adı veya şifrenizi kontrol ediniz',
        'Başrısız deneme.'
      );
    }
  }
}
