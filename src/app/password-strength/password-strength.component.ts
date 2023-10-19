//import { Component } from '@angular/core';
import {
  Component,
  Renderer2,
  ElementRef,
  ViewChildren,
  QueryList,
  OnInit,
} from '@angular/core';
import { Password } from '../models/password';
import { PasswordStrengthService } from '../services/password-strength.service';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent implements OnInit {
  password: Password;
  readonly easyPassMessage = 'The password is easy';
  readonly mediumPassMessage = 'The password is medium';
  readonly strongPassMessage = 'The password is easy';
  @ViewChildren('strength-section') strengthSections: QueryList<ElementRef>;

  passwordStrengthSectionColors = {
    Length: 'gray',
    Complexity: 'gray',
    CommonPasswords: 'gray',
  };

  constructor(
    private renderer: Renderer2,
    private passwordStrengthService: PasswordStrengthService
  ) {
    this.strengthSections = new QueryList<ElementRef>();
  }

  ngOnInit(): void {
    this.password = {
      value: '',
      strength: '',
    };
  }

  checkPasswordStrength() {
    let strength = this.passwordStrengthService.checkPasswordStrength(
      this.password.value
    );
    this.password.strength = strength;
  }

  getStrengthClass() {
    console.log('check 2');
    return `strength-${this.password.strength}`;
  }

  clearPasswordInput() {
    console.log('clearing');
    this.password.value = '';
    this.password.strength = '';

    // const sections = document.querySelectorAll('.strength-section');
    // sections.forEach((section) => {
    //   section.classList.add('grey-section');
    // });
  }
}
