import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { itemListInterface } from '../../item-list.component';
import { CartDataService } from 'src/app/service/cart-data.service';
import { SetHeaderService } from 'src/app/service/set-header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.css']
})
export class BuyNowComponent implements OnChanges {
  constructor(private CartDataServiceData: CartDataService, private setNavMenu: SetHeaderService, private router: Router) {
  }

  @Input() itembuy!: itemListInterface;
  animationShow: boolean = false;
  quantityCount!: number | any;
  quantity!: number | any;

  ngOnChanges(changes: SimpleChanges) {
    this.quantityCount = this.itembuy.count;
    this.quantity = this.itembuy.count;
  };

  //  Set Validation 
  customerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), this.noWhitespaceValidator]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,80}$')]),
    address: new FormControl('', [Validators.required, this.noWhitespaceValidator]),
    number: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
  });

  get setNameValidation() {
    return this.customerForm.get('name');
  };

  get setEmailValidation() {
    return this.customerForm.get('email');
  };

  get setAddressValidation() {
    return this.customerForm.get('address')
  };
  get setMobileNumberValidation() {
    return this.customerForm.controls;
  };

  // Submit Btn 
  submitCustomerData = () => {
    this.customerForm.reset();
    this.animationShow = true;
    setTimeout(() => {
      this.animationShow = false;
      this.router.navigate(['/item-list'])
    }, 3000);
  };

  // Animation path 
  AnimationOptions = {
    path: '../../../assets/Image/yt9Pr2ANRm.json'
  };

  // increment Quantity 
  incrementQuantity = () => {
    if (this.quantity > this.quantityCount) {
      this.quantityCount = this.quantityCount + 1;
    };
  };

  // decrement Quantity 
  decrementQuantity = () => {
    if (1 < this.quantityCount) {
      this.quantityCount = this.quantityCount - 1;
    };
  };

  // No whitespace Validation 
  noWhitespaceValidator(control: FormControl): ValidationErrors | null {
    const isWhitespace = (control.value || '').trim().length === 0;
    return isWhitespace ? { whitespace: true } : null;
  };
};