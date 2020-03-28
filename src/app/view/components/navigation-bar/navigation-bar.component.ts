import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { tap } from 'rxjs/operators'
import { navData } from '../data/nav.data'

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  navData = navData
  @Output('navOpen') navOpen = new EventEmitter<boolean>(false)
  activeLink: string
  constructor(private router: Router) {}

  ngOnInit() {
    this.getRouteLink()
  }

  getStyleGridTemplateColumn() {
    return `repeat(${this.navData.length},1fr)`
  }

  openNav() {
    this.navOpen.emit(true)
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
