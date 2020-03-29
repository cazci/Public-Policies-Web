import { Component, OnInit } from '@angular/core'
import { HomeService } from './home.service'
import { HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, of } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {}
  newCases: BehaviorSubject<string> = new BehaviorSubject<string>(null)
  totalCases: BehaviorSubject<string> = new BehaviorSubject<string>(null)
  totalDeaths: BehaviorSubject<string> = new BehaviorSubject<string>(null)
  totalRecovered: BehaviorSubject<string> = new BehaviorSubject<string>(null)
  ngOnInit() {
    this.getTrackingDetails()
  }

  getTrackingDetails() {
    this.homeService.getTrackingDetails().subscribe(result => {
      if (result.successs) {
        this.newCases.next(result.data.global_new_cases)
        this.totalCases.next(result.data.global_total_cases)
        this.totalDeaths.next(result.data.global_deaths)
        this.totalRecovered.next(result.data.global_recovered)
      }
    })
  }

  formateNumbers(x: string) {
    if (x != null) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }
}
