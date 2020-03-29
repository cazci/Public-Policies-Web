import { Component, OnInit } from '@angular/core'
import { HomeService } from './home.service'
import { BehaviorSubject } from 'rxjs'
import { FormGroup, FormControl } from '@angular/forms'

interface CountryData {
  Country: string
  Slug: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newCases: BehaviorSubject<string> = new BehaviorSubject<string>(null)
  totalCases: BehaviorSubject<string> = new BehaviorSubject<string>(null)
  totalDeaths: BehaviorSubject<string> = new BehaviorSubject<string>(null)
  totalRecovered: BehaviorSubject<string> = new BehaviorSubject<string>(null)
  countryList: BehaviorSubject<Array<CountryData>> = new BehaviorSubject<Array<CountryData>>([])
  filterFormController: FormGroup

  constructor(private homeService: HomeService) {
    this.filterFormController = new FormGroup({
      filter: new FormControl('')
    })
  }

  ngOnInit() {
    this.getTrackingDetails()
    this.getAllCountries()
  }

  getTrackingDetails() {
    this.clearData()
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
    } else {
      return '-'
    }
  }

  getAllCountries() {
    this.homeService.getAllCountries().subscribe(result => {
      if (result.successs) {
        this.countryList.next(
          result.data.map(c => {
            return { Country: c.Country, Slug: c.Slug } as CountryData
          })
        )
      }
    })
  }

  selectionChanged(event: Event) {
    if ((event as any).value != '') {
      this.getCountryDetails((event as any).value)
    } else {
      this.getTrackingDetails()
    }
  }

  clearData() {
    this.newCases.next(null)
    this.totalCases.next(null)
    this.totalDeaths.next(null)
    this.totalRecovered.next(null)
  }

  getCountryDetails(country: string) {
    this.clearData()
    this.homeService.getCountryDetails(country, 'confirmed').subscribe(result => {
      if (result.successs) {
        let count = 0
        this.totalCases.next(
          (result.data as Array<any>).map(r => {
            return (count += r.Cases)
          })[(result.data as Array<any>).length - 1]
        )
      } else {
        this.clearData()
      }
    })

    this.homeService.getCountryDetails(country, 'recovered').subscribe(result => {
      if (result.successs) {
        let count = 0
        this.totalRecovered.next(
          (result.data as Array<any>).map(r => {
            return (count += r.Cases)
          })[(result.data as Array<any>).length - 1]
        )
      } else {
        this.clearData()
      }
    })

    this.homeService.getCountryDetails(country, 'deaths').subscribe(result => {
      if (result.successs) {
        let count = 0
        this.totalDeaths.next(
          (result.data as Array<any>).map(r => {
            return (count += r.Cases)
          })[(result.data as Array<any>).length - 1]
        )
      } else {
        this.clearData()
      }
    })
  }
}
