import { SellerService } from './../services/seller.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent {
  constructor(private seller: SellerService, private router: Router) {}

  ngOnInit(): void {}

  signUp(data: SignUp) {
    this.seller.userSignup(data).subscribe((res) => {
      if (res) {
        this.router.navigate(['/seller-home']);
      }
    });
  }
}
