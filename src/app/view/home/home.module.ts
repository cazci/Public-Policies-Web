import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { MaterialComponentsModule } from 'src/app/shared/material-components/material-components.module'
import { HttpClientModule } from '@angular/common/http'
import { HomeService } from './home.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { DirectedGraphComponent } from './components/directed-graph/directed-graph.component'

@NgModule({
  declarations: [HomeComponent, LineChartComponent, DirectedGraphComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialComponentsModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [HomeService]
})
export class HomeModule {}
