import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MobileRoutingModule } from './mobile-routing.module'
import { MobileComponent } from './mobile.component'
import { MaterialComponentsModule } from 'src/app/shared/material-components/material-components.module'

@NgModule({
  declarations: [MobileComponent],
  imports: [CommonModule, MobileRoutingModule, MaterialComponentsModule]
})
export class MobileModule {}
