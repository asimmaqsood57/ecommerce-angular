import { SellerService } from './../services/seller.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login, SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent {
  showLogin = false;
  authError: string = '';
  constructor(private seller: SellerService, private router: Router) {}

  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signUp(data: SignUp) {
    this.seller.userSignup(data);
  }

  login(data: Login) {
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((res) => {
      if (!res) {
        this.authError = '';
        this.router.navigate(['/seller-home']);
      } else {
        this.authError = "Email or Password doesn't match";
      }
    });
  }

  openLogin() {
    this.showLogin = true;
  }
  openSignup() {
    this.showLogin = false;
  }
}
