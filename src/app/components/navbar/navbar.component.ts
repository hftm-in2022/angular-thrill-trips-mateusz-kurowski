import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false;
  userEmail: string | null = null;

  constructor(
    private oidcSecurityService: OidcSecurityService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.oidcSecurityService.checkAuth().subscribe((authResult) => {
      this.isAuthenticated = authResult.isAuthenticated;
      console.log('Auth Result:', authResult);
      this.cdr.detectChanges();
    });

    this.oidcSecurityService.userData$.subscribe((userData) => {
      const nestedUserData = userData?.userData || {};
      this.userEmail = nestedUserData.email || null;
      console.log('User Email:', this.userEmail);
      this.cdr.detectChanges();
    });
  }

  login(): void {
    this.oidcSecurityService.authorize();
  }

  logout(): void {
    console.log('Logout button clicked');
    this.oidcSecurityService.logoff().subscribe(() => {
      console.log('User logged out');
      this.router.navigate(['/']);
    });
  }

  navigateToAddBlog(): void {
    this.router.navigate(['/add-blog']);
  }

  navigateToHome(): void {
    console.log('Navigating to home...');
    this.router.navigate(['/']);
  }
}
