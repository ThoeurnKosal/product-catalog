import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthControllerService, Configuration} from '../../@swagger';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _configuration: Configuration,
    private _authControllerService: AuthControllerService
    ) { }

  /**
   * On init
   */
  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this._authControllerService.loginUsingPOST(
      this.loginForm.get('password').value,
      this.loginForm.get('email').value
    ).subscribe(response => {
      if (response.header.result) {
        const accessToken = 'Bearer ' + response.body['accessToken'];
        localStorage.setItem('accessToken', accessToken);
        this._configuration.apiKeys['Authorization'] = accessToken;
        this._router.navigateByUrl('tabs/tabs/(category:category)');
      } else {
        console.log("Invalid username and password!");
      }
    }, (err) => {
      console.log(err);
    });
  }


}
