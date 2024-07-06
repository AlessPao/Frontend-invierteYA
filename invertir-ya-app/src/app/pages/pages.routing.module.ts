import { Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import { LandingpageContactComponent } from './landingpage-contact/landingpage-contact.component';
import { ArticleComponent } from './article/article.component';


export const PagesRoutes: Routes = [
  {
    path: '',
    component: StarterComponent,
    data: {
      title: 'Starter Page',
    },
  },
  {
    path: 'contacts',
    component: LandingpageContactComponent,
    data: {
      title: 'Contactos',
    },
  },
  {
    path: 'articles',
    component: ArticleComponent,
    data: {
      title: 'Artículos',
    },
  }
];
