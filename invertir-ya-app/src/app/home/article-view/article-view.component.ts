import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/article.model';
import { ArticleService } from 'src/app/services/article.service';
import { CoreService } from 'src/app/services/core.service';

interface apps {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  link: string;
}

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit{

  options = this.settings.getOptions();
  apps: apps[] = [
    {
      id: 5,
      img: '/assets/images/svgs/icon-dd-mobile.svg',
      title: 'Calculadora',
      subtitle: 'Fórmula estándar',
      link: '/apps/contacts',
    },
  ];

  articles: Article[] = [];

  constructor(
    private articleService: ArticleService,
    private settings: CoreService,
    private router: Router,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }
  ngOnInit(): void {
    this.init();
  }

  init()
  {
    this.articleService.findAll().subscribe(
      response => {
        this.articles = response;
      }
    );
  }

  selectBlog(data: any, action: string){
    this.router.navigate([`/article/detail/${data.id}`]);
  }

}
