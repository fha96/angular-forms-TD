import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') formElem?: NgForm;
  submitted: boolean = false ;
  user: {
    username: string,
    email: string,
    secret: string,
    gender: string
  } = {
    username:'',
    email:'',
    secret:'',
    gender:''
  }; 

  defaultSelection: string = 'pet';
  answer: string = '';
  genders: string[] = ['male', 'female'];
  suggestUserName() {
    const suggestedName = 'Superuser';

    // patchValue method won't override all controls( inputs ) like setValue method
    // also we can solve it with two data binding approach of [(ngModel)]
    this.formElem?.form.patchValue({
      userdata:{
        username: suggestedName
      }
    })
  }

  // first approach
  // onSubmit(formRef: NgForm){
  //   console.log(formRef);
  // }

  // second approach using ViewChild
  onSubmit() {
    this.submitted = true ;
    console.log(this.formElem);
    this.user.username = this.formElem?.form.value.userdata.username;
    this.user.email = this.formElem?.form.value.userdata.email;
    this.user.secret = this.formElem?.form.value.secret;
    this.user.gender = this.formElem?.form.value.gender;
    this.formElem?.reset();
  }
}
