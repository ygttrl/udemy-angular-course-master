import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private toastr:ToastrService,private spinner: NgxSpinnerService) {}
  title = 'udemy-angular-course';

  ngOnInit(): void {
    this.showSuccess();
    this.showSnipper();
  }

  showSuccess(){
    this.toastr.success('Hello world','Toastr fun1');
  }

  showSnipper(){
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 5000);
  }
}
