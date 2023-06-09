import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reminder';
  validateForm!: FormGroup;
  constructor(private _fb: FormBuilder,private notification: NzNotificationService) {}
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
