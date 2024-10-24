# Thrill Trips

Thrill Trips is supposed to be a web application for people who are adrenaline addicts. Therefore I will present here a blog and if skills allow sort of a travel page together with blog entries. Main topics will be:

- Snow sports (snowboard, skiing)
- Water sports (windsurfing, surfing)
- Motor sports (motocross, rally)

## Why?

Well this is the most common and most interesting question. As my README is usually long, waaaay too long I will keep this short and

1. I love to snowboard. If it wasn't for school I would be each weekend on the slope
2. I picked up surfing a year ago and whenever time allows (and wife and money 😅) I try to find a good connection flight and train more.
3. I was born in the city which is commonly known as the Mekka of Polish Motocross, so connect the dots. Sadly my carrer in motosport was cut short by driving too fast and having overprotective parents 🤣

## Project status

1. Iteration 0, for more details see the [Setup](SETUP.md) document which is stored in this repository.
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

---

Credit notes:
Created by Mateusz supported by Milka 🐈 with the power of 🍫 and ☕
