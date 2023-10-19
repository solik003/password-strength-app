import { Injectable } from '@angular/core';
import { Password } from '../models/password';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  constructor() {}

  checkPasswordStrength(passwordValue: string) {
    let passwordStrength;
    console.log('check');
    if (passwordValue === '') {
      passwordStrength = 'Empty';
    } else if (passwordValue.length < 8) {
      passwordStrength = 'LessThan8';
    } else if (this.isEasyPassword(passwordValue)) {
      passwordStrength = 'Easy';
    } else if (this.isMediumPassword(passwordValue)) {
      passwordStrength = 'Medium';
    } else if (this.isStrongPassword(passwordValue)) {
      passwordStrength = 'Strong';
    } else {
      passwordStrength = 'strong';
    }
    console.log(passwordStrength);
    return passwordStrength;
  }

  isEasyPassword(password: string): boolean {
    return (
      /^[a-zA-Z]+$/.test(password) ||
      /^[0-9]+$/.test(password) ||
      /^[!@#$%^&*()_+{}[\]:;<>,.?~\\-]+$/.test(password)
    );
  }

  isMediumPassword(password: string): boolean {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /[0-9]/.test(password);
    const hasSymbols = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password);

    return (
      (hasLetters && hasSymbols && !hasDigits) ||
      (hasLetters && hasDigits && !hasSymbols) ||
      (hasDigits && hasSymbols && !hasLetters)
    );
  }

  isStrongPassword(password: string): boolean {
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password);

    return hasLetter && hasDigit && hasSymbol;
  }
}
