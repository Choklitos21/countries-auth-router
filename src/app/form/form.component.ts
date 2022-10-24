import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  myForm = {
    first_name: '',
    last_name: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(values: any) {
    console.log('Form values', values)
  }

}
