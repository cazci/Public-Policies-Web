import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSidenav } from '@angular/material/sidenav'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  @ViewChild('peopleMenuSidenav', { static: true }) sideNav: MatSidenav
  constructor() {}

  ngOnInit() {}

  setNavState(event: Event) {
    this.sideNav.open()
  }
}
