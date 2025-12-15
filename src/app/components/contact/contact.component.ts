import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    // Read values directly from DOM to avoid template binding issues
    const firstNameInput = document.getElementById('firstName') as HTMLInputElement;
    const lastNameInput = document.getElementById('lastName') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const msgInput = document.getElementById('message') as HTMLTextAreaElement;

    this.firstName = firstNameInput ? firstNameInput.value : '';
    this.lastName = lastNameInput ? lastNameInput.value : '';
    this.email = emailInput ? emailInput.value : '';
    this.phone = phoneInput ? phoneInput.value : '';
    this.message = msgInput ? msgInput.value : '';

    if (this.firstName && this.email && this.message) {
      const fullName = `${this.firstName} ${this.lastName}`.trim();
      const subject = `Portfolio Contact from ${fullName}`;
      const body = `Name: ${fullName}\nEmail: ${this.email}\nPhone: ${this.phone}\n\nMessage:\n${this.message}`;
      const mailtoLink = `mailto:sozhanmalliga2425@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.open(mailtoLink, '_blank');

      alert('Opening your email client to send the message!');

      if (firstNameInput) firstNameInput.value = '';
      if (lastNameInput) lastNameInput.value = '';
      if (emailInput) emailInput.value = '';
      if (phoneInput) phoneInput.value = '';
      if (msgInput) msgInput.value = '';

    } else {
      alert('Please fill in at least Name, Email and Message.');
    }
  }
}
