import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/article.model';
import { ArticleService } from 'src/app/services/article.service';
import { DialogArticleComponent } from './dialog-article/dialog-article.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit{
  articles: Article[] = [];

  constructor(
    private articleService: ArticleService,
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
    data.action = action;
    const dialogRef = this.dialog.open(DialogArticleComponent, {
      data: data,
      disableClose: true,
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.event === 'Registrar') {
        this.add(result.data);
      } else if (result?.event === 'Editar') {
        this.update(result.data);
      } 
    });
  }

  add(data: Article){
    this.articleService.save(data).subscribe({
      next: response => {
        this._snackBar.open('Artículo registrado', 'Cerrar', {duration: 2000});
        this.init();
      },
    });
  }
  update(data: Article){
    this.articleService.update(data).subscribe({
      next: response => {
        this._snackBar.open('Artículo actualizado', 'Cerrar', {duration: 2000});
        this.init();
      },
    });
  }

  delete(id: number){
    const ok = confirm('¿Estás seguro de eliminar el artículo?');
    if(ok)
    {
      this.articleService.delete(id).subscribe(
        response => {
          this._snackBar.open('Artículo eliminado', 'Cerrar', {duration: 2000});
          this.init();
        }
      );
    }
  }
}
