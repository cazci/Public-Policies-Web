import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { of } from 'rxjs'
import { environment } from 'src/environments/environment'
import { NodeGraphRequestData } from './components/models/node-graph-request-data'

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
        return new Result(true, null, response)
      }),
      catchError(error => {
        return of(new Result(false, error, null))
      })
    )
  }

  getCountryDetails(country: string, status: string) {
    return this.http.get<any>(`https://api.covid19api.com/total/country/${country}/status/${status}`, this.httpOptions).pipe(
      map(response => {
        return new Result(true, null, response)
      }),
      catchError(error => {
        return of(new Result(false, error, null))
      })
    )
  }

  getNodeGrapData(data: NodeGraphRequestData) {
    return this.http
      .get(
        `${environment.API_URL}/data?random_encounters=${data.random_encounters}&prob_communities=${data.prob_communities}&initial_fraction_infected=${data.initial_fraction_infected}&fraction_interacting=${data.fraction_interacting}&p_infection=${data.p_infection}&p_contact=${data.p_contact}`,
        this.httpOptions
      )
      .pipe(
        map(response => {
          return new Result(true, null, response)
        }),
        catchError(error => {
          return of(new Result(false, error, null))
        })
      )
  }
}
