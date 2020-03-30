import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SafetyRoutingModule } from './safety-routing.module'
import { SafetyComponent } from './safety.component'
import { MaterialComponentsModule } from 'src/app/shared/material-components/material-components.module'
import { FeatherModule } from 'angular-feather'
import { allIcons } from 'angular-feather/icons'

@NgModule({
  declarations: [SafetyComponent],
  imports: [CommonModule, SafetyRoutingModule, MaterialComponentsModule, FeatherModule.pick(allIcons)]
})
export class SafetyModule {}
