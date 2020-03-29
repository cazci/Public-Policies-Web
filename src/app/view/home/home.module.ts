import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { MaterialComponentsModule } from 'src/app/shared/material-components/material-components.module'
import { HttpClientModule } from '@angular/common/http'
import { HomeService } from './home.service'

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialComponentsModule, HttpClientModule],
  providers:[HomeService]
})
export class HomeModule {}
