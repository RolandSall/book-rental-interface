import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  criteria:string[] =[
    'Fiction',
    'Arts',
    'Novel',
    'Anthology'

  ];

  bookform: FormGroup;
  validMessage: string ="";

  constructor(private bookService:BookService) { }

  ngOnInit() {
    this.bookform = new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),
      criteria: new FormControl('',Validators.required),
      serialNumber: new FormControl('',Validators.required),
      purchasePrice: new FormControl('',Validators.required),
      purchaseDate: new FormControl('MM-DD-YYYY',Validators.required),
      contact: new FormControl(),
    });
  }

  submitRegistration() {
    if (this.bookform.valid) {
      this.validMessage = "Your Book Registration has been submitted!"
      this.bookService.createBookRegisration(this.bookform.value).subscribe(
        data => {
          this.bookform.reset();
          return true
        },

        error => {
          return Observable.throw(error);
        }
      )
    } else{
      this.validMessage="Please Fill the missing information in the form before submitting"
    }
  }
}
