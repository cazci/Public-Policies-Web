import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { of } from 'rxjs'

interface HTTPOptionData {
  [key: string]: HttpHeaders
}

export class Result {
  constructor(public successs: boolean, public error?: any, public data?: any) {}
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private httpOptions: HTTPOptionData = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {}

  getTrackingDetails() {
    return this.http.get<any>(`https://hpb.health.gov.lk/api/get-current-statistical`, this.httpOptions).pipe(
      map(response => {
        return new Result(true, null, response.data)
      }),
      catchError(error => {
        return of(new Result(false, error, null))
      })
    )
  }

  getAllCountries() {
    return this.http.get<any>(`https://api.covid19api.com/countries`, this.httpOptions).pipe(
      map(response => {
        return new Result(true, null,  response)
      }),
      catchError(error => {
        return of(new Result(false, error, null))
      })
    )
  }

  getCountryDetails(country:string,status:string){
    return this.http.get<any>(`https://api.covid19api.com/total/country/${country}/status/${status}`, this.httpOptions).pipe(
      map(response => {
        return new Result(true, null,  response)
      }),
      catchError(error => {
        return of(new Result(false, error, null))
      })
    )
  }
}
