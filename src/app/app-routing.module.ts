import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { ArticleComponent } from './components/article/article.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path:'', component:FeedComponent},
  {path:'article', component:ArticleComponent},
  {path:'about', component:AboutComponent}
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
