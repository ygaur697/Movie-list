import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})


export class MainNavComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  screenWidth: number;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private breakpointObserver: BreakpointObserver) {
    // set screenWidth on page load
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      // set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
    }


  }


  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
