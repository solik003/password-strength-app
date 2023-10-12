import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrengthComponent } from './password-strength.component';

describe('PasswordStrengthComponent', () => {
  let component: PasswordStrengthComponent;
  let fixture: ComponentFixture<PasswordStrengthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordStrengthComponent]
    });
    fixture = TestBed.createComponent(PasswordStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// import { Component } from '@angular/core';



// @Component({
//   selector: 'app-password-strength',
//   templateUrl: './password-strength.component.html',
//   styleUrls: ['./password-strength.component.css']
// })
// export class PasswordStrengthComponent{
//   password: string = '';
//   passwordStrength: string  = '';


//   checkPasswordStrength() {
//     if(this.password === ''){
//       this.passwordStrength = 'Empty';
//     }
//     else if(this.isEasyPassword(this.password)) {
//       this.passwordStrength = 'Easy';
//     }
//     else if(this.isMediumPassword(this.password)) {
//       this.passwordStrength = 'Medium';
//     }
//     else{
//       this.passwordStrength = 'Strong';
//     }
//   }
//   isEasyPassword(password:string): boolean{
//     return /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\-]+$/.test(password);
//   }
//   isMediumPassword(password:string): boolean{
//     const hasLetters = /[a-zA-Z]/.test(password);
//     const hasDigits = /[0-9]/.test(password);
//     const hasSymbols = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password);

//     return (
//       (hasLetters && hasSymbols) || (hasLetters && hasDigits) || (hasDigits && hasSymbols)
//     );
//   }
//   getStrengthClass() {
//     return `strength-${this.passwordStrength}`;
//   }

// }