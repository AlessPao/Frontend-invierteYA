import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/model/article.model';
import { Commentary } from 'src/app/model/commentary.model';
import { ArticleService } from 'src/app/services/article.service';
import { CommentaryService } from 'src/app/services/commentary.service';
import { CoreService } from 'src/app/services/core.service';

interface apps {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  link: string;
}
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit{
  commentaryText: string = '';
  replyText: string = '';
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

  id: string;
  blogDetail: Article ;
  
  istoggleReply = true;  
  constructor(
    public router: Router,
    private activatedRouter: ActivatedRoute,
    private articleService: ArticleService,
    private commentaryService: CommentaryService,
    private settings: CoreService,
  ) { 
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.init();
  }

  init()
  {
    this.articleService.findById(Number(this.id)).subscribe((data) => {
      this.blogDetail = data;
    });
  }

  toggleReply() {  
    this.istoggleReply = !this.istoggleReply;  
  }

  sendCommentary(){
    let commentary : Commentary = new Commentary();
    commentary.fullName = 'Anónimo';
    commentary.content = this.commentaryText;
    commentary.article = this.blogDetail;

    this.commentaryService.save(commentary).subscribe((data) => {
      this.init();
      this.commentaryText = '';
    });
  }

  sendReply(){
    let reply : Commentary = new Commentary();
    reply.fullName = 'Anónimo';
    reply.content = this.replyText;
    reply.article = this.blogDetail;

    this.commentaryService.save(reply).subscribe((data) => {
      this.init();
      this.replyText = '';
    });
  }

  deleteCommentary(id: number){
    const ok = confirm('¿Está seguro de eliminar el comentario?');
    if(ok){
      this.commentaryService.delete(id).subscribe((data) => {
        this.init();
      });
    }
  }
}
