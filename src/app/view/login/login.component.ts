import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/entity/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  role: string = 'Customer';

  constructor(private userService: UserService, private router: Router) {}

  onLogin() {
    const suser: User = {
      username: this.username,
      password: this.password,
      role: this.role,
    };
    console.log(this.username);
    
    this.userService.getUserByName(this.username).subscribe(
      (response: any) => {
        if (response) {
          // Store user data in local storage or session
          localStorage.setItem('user', JSON.stringify(response));
          this.router.navigate(['/dashboard']);
        } else {
          alert(
            'Login failed: ' + (response.message || 'Invalid credentials---')
          );
        }
      },
      (error) => {
        console.error('Login error', error);
        alert('Login error: ' + error.message);
      }
    );
  }
}
