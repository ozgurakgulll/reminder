import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  validateForm!: FormGroup;
  phoneForm!: FormGroup;
  listOfControl: Array<{ id: number; controlInstance: string }> = [];

  constructor(private _fb: FormBuilder,private http: HttpClient,private router: Router) {
  }
  ngOnInit(): void {
    this.phoneForm = this._fb.group({});
    this.addField();
    this.validateForm = this._createForm()
  }
  private _createForm(): FormGroup {
      return this._fb.group({
      name: new FormControl(null, Validators.required),
      description: new FormControl('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', Validators.required),
      surname:  new FormControl(null, Validators.required),
      tc: new FormControl(null, Validators.required),
      dose: new FormControl(0, Validators.required),
      date:new FormControl(new Date(new Date().setDate(new Date().getDate() + 28)))
    });
  }
  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `passenger${id}`
    };
    const index = this.listOfControl.push(control);
    this.phoneForm.addControl(
      this.listOfControl[index - 1].controlInstance,
      new FormControl(null, Validators.required)
    );
  }
  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      this.phoneForm.removeControl(i.controlInstance);
    }
  }

  handleCancel() {

  }

  onSave() {
    const dt ={
      ...this.validateForm.value,
       phone:Object.keys(this.phoneForm.value).map(val => this.phoneForm.value[val])
    }
    this.http.post('http://localhost:3000/api/sms',dt).subscribe((a)=>{
          this.router.navigate(['/']);
    }
    )
  }
}
