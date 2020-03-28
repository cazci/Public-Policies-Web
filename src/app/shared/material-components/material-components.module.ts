import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatRippleModule } from '@angular/material/core'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatRippleModule, MatSidenavModule, MatIconModule, MatListModule],
  exports: [MatButtonModule, MatRippleModule, MatSidenavModule, MatIconModule, MatListModule]
})
export class MaterialComponentsModule {}
