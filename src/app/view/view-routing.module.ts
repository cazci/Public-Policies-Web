import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ViewComponent } from './view.component'

const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
          },
          {
            path: 'home',
            loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
          },
          {
            path: 'mobile',
            loadChildren: () => import('./mobile/mobile.module').then(m => m.MobileModule)
          },
          {
            path: 'questions',
            loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule)
          },
          {
            path: 'safety',
            loadChildren: () => import('./safety/safety.module').then(m => m.SafetyModule)
          },
          {
            path: 'team',
            loadChildren: () => import('./team/team.module').then(m => m.TeamModule)
          }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule {}
