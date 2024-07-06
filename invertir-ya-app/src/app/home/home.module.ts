import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { CalculatorComponent } from './calculator/calculator.component';
import { DirectivesModule } from '../directives/directives.module';
import { ContactComponent } from './contact/contact.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { ArticleDetailComponent } from './article-view/article-detail/article-detail.component';

@NgModule({
  declarations: [
    LandingpageComponent,
    ContactComponent,
    CalculatorComponent,
    ArticleViewComponent,
    ArticleDetailComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,
    DirectivesModule
  ]
})
export class HomeModule { }
