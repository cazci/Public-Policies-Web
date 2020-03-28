import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatRippleModule } from '@angular/material/core'

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatRippleModule],
  exports: [MatButtonModule, MatRippleModule]
})
export class MaterialComponentsModule {}
