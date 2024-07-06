import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StarterComponent } from './starter/starter.component';
import { PagesRoutes } from './pages.routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { LandingpageContactComponent } from './landingpage-contact/landingpage-contact.component';

import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { DialogArticleComponent } from './article/dialog-article/dialog-article.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
@NgModule({
  declarations:[
    ArticleComponent,
    LandingpageContactComponent,
    DialogArticleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(PagesRoutes),
    TablerIconsModule.pick(TablerIcons),
    StarterComponent,
    AngularEditorModule,
    ReactiveFormsModule
  ],
})
export class PagesModule {}
