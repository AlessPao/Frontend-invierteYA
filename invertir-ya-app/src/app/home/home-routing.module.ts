import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ContactComponent } from './contact/contact.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { ArticleDetailComponent } from './article-view/article-detail/article-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'calculator',
    component: CalculatorComponent
  },
  {
    path: 'articles',
    component: ArticleViewComponent
  },
  {
    path: 'article/detail/:id',
    component: ArticleDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
