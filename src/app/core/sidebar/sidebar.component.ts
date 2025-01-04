import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, RouterOutlet } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    CommonModule,
  ],
})
export class SidebarComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private oidcSecurityService = inject(OidcSecurityService);
  private router = inject(Router);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  isAuthenticated = false;
  userEmail: string | null = null;

  constructor() {
    this.oidcSecurityService.checkAuth().subscribe((authResult) => {
      this.isAuthenticated = authResult.isAuthenticated;
      console.log('Auth Status:', this.isAuthenticated);
    });

    this.oidcSecurityService.userData$.subscribe((userData) => {
      this.userEmail = userData?.userData?.email || null;
      console.log('User Email:', this.userEmail);
    });
  }

  login(): void {
    this.oidcSecurityService.authorize();
  }

  logout(): void {
    this.oidcSecurityService.logoff().subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  navigateToAddBlog(): void {
    this.router.navigate(['/add-blog']);
  }

  navigateToHome(): void {
    console.log('Navigating to home...');
    this.router.navigate(['/overview']);
  }
}
