import { Component } from '@angular/core';


@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  password: string = '';
  passwordStrength: string = '';

  passwordStrengthSectionColors = {
    Length: 'gray',
    Complexity: 'gray',
    CommonPasswords: 'gray',
  };

  checkPasswordStrength() {
    console.log('check');
    if (this.password === '') {
      this.passwordStrength = 'Empty';
    } else if (this.password.length < 8) {
      const sections = document.querySelectorAll('.strength-section');
      this.passwordStrength = 'LessThan8';
      sections.forEach((section) => {
        
        section.classList.add('red-section');
      });
    } else if (this.isEasyPassword(this.password)) {
      const sections = document.querySelectorAll('.strength-section');
      sections[0].classList.add('red-section');

      for (let i = 1; i < sections.length; i++) {
        sections[i].classList.remove('red-section');
      }

      this.passwordStrength = 'Easy';
    } else if (this.isMediumPassword(this.password)) {
      const sections = document.querySelectorAll('.strength-section');
      sections[0].classList.add('yellow-section');
      sections[1].classList.add('yellow-section');
      for (let i = 1; i < sections.length; i++) {
        sections[i].classList.remove('red-section');
      }
      this.passwordStrength = 'Medium';
    } else if (this.isStrongPassword(this.password)) {
      const sections = document.querySelectorAll('.strength-section');
      sections.forEach((section) => {
        section.classList.add('green-section');
      });
      this.passwordStrength = 'Strong';
    } else {
      const sections = document.querySelectorAll('.strength-section');
      sections.forEach((section) => {
        section.classList.add('green-section');
      });
      this.passwordStrength = 'Strong';
    }
    
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

  getStrengthClass() {
    console.log('check 2');
    return `strength-${this.passwordStrength}`;
  }

  clearPasswordInput() {
    this.password = '';

    const sections = document.querySelectorAll('.strength-section');
    sections.forEach(section => {
      section.classList.add('grey-section');
    });
  }
}
