import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  profile = {
    username: 'Trung',
    email: 'trungdoan@gmail.com',
    facebook: 'helloworld.com',
    twitter: 'helloworld.com',
    website: 'helloworld.com',
    tel: '12312312'
  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit(profileForm) {
    console.log(profileForm);
  }

}
