import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/service/httpService/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder, private httpService: HttpService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      mailid: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    console.log('Login function working')
    let httpOptions = {
      httpOptions: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    if (this.loginForm.valid) {
      this.httpService.postService("login", this.loginForm.value, false, httpOptions).subscribe((responce:any)=>{
        console.log(responce)
      })
    }
  }

}
