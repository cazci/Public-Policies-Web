import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { MaterialComponentsModule } from 'src/app/shared/material-components/material-components.module'

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, MaterialComponentsModule],
  exports: [PageNotFoundComponent]
})
export class ErrorPageModule {}
