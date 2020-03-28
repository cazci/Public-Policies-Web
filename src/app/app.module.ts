import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ErrorPageModule } from './core/error-page/error-page.module'
import { MaterialComponentsModule } from './shared/material-components/material-components.module'
import { ViewModule } from './view/view.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, ErrorPageModule, MaterialComponentsModule, ViewModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
