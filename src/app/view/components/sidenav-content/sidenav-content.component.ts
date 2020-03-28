import { Component, OnInit } from '@angular/core'
import { navData } from '../data/nav.data'
import { Router, NavigationEnd } from '@angular/router'
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss']
})
export class SidenavContentComponent implements OnInit {
  activeLink: string
  navData = navData
  constructor(private router: Router) {}

  ngOnInit() {
    this.getRouteLink()
  }

  getRouteLink() {
    this.activeLink = this.router.url.split('/')[1]

    this.router.events
      .pipe(
        tap((routerResponse: any) => {
          if (routerResponse instanceof NavigationEnd) {
            this.activeLink = routerResponse.url.split('/')[1]
          }
        })
      )
      .subscribe()
  }
}
