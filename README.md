# Thrill Trips

Thrill Trips was supposed to be a web application for people who are adrenaline addicts. Yet do to the tempo of the project, amount of private tasks and work I wasn't able to build what I hoped for. Decided to proceed with a blog, the same project as presented in the classes.

The demo shows the 3 major topics I wanted to focus on:

- Snow sports (snowboard, skiing) 🏂
- Water sports (windsurfing, surfing) 🏄‍♂️
- Motor sports (motocross, rally) 🏎️

## Project status

1. Iteration 0, for more details please see the [Setup](SETUP.md) document which is stored in this repository.
2. Added the demo as requested.
   - Created custom component blog-card.
   - Logo click as well as a button implemented.
     ```
     <img [src]="imageUrl" alt="dynamic image" class="welcome-picture" tabindex="0" (click)="onLogoClicked()"
         (keydown)="onLogoKeyDown($event)" />
     ```
   - if implemented
     ```
     <h1 *ngIf="name">Hello, {{ name }}! </h1>
     ```
   - for implemented (though commented out as it doesn't really make sense at the moment)
     ```
     <div *ngFor="let trip of trips; let i = index">
     <img [src]="imageUrl" alt="dynamic image" class="welcome-picture" tabindex="0" (click)="onLogoClicked()"
         (keydown)="onLogoKeyDown($event)" />
     </div>
     ```
   - ngClass implemented
     ```
     <h1 [ngClass]="{<!-- check blog-card.component.html, lines 13-17 -->}">
     </h1>
     ```
   - ngStyle implemented
     ```
      <div [ngStyle]="{<!-- check blog-card.component.html, lines 28-35 -->}
      </div>
     ```
   - ngModel (2-way binding) implemented
     ```
     <input class="demo" [(ngModel)]="name" (keyup)="onKeyUp(name)">
     ```
3. Sprint 1 was implemented (more information to come later on -> Milestone 2)
4. Sprint 2 was implemented (more information to come later on -> Milestone 2)
5. Sprint 3 was implemented (more information to come later on -> Milestone 2)
6. Sprint 4 was implemented (more information to come later on -> Milestone 2)
7. Sprint 5 was implemented (more information to come later on -> Milestone 2)
8. Sprint 6 was implemented (more information to come later on -> Milestone 2)
9. Milestone 1 delivered

---

Credit notes:
Created by Mateusz supported by Milka 🐈 with the power of 🍫 and ☕
