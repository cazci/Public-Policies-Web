import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AnalyticsRoutingModule } from './analytics-routing.module'
import { AnalyticsComponent } from './analytics.component'
import { DirectedGraphComponent } from './components/directed-graph/directed-graph.component'
import { MaterialComponentsModule } from 'src/app/shared/material-components/material-components.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [AnalyticsComponent, DirectedGraphComponent],
  imports: [CommonModule, AnalyticsRoutingModule, MaterialComponentsModule, FormsModule, ReactiveFormsModule]
})
export class AnalyticsModule {}
