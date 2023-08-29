import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { LoreminsupmService } from 'src/app/services/loreminsupm.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  datos: any;
  noticias$: Observable<{ articles: Article[] }> | undefined;
  newsService: any;
  articleTitle: string | null = null;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('Params', params);
      this.articleTitle = params['title'];
      console.log(this.articleTitle)
      //const idNews = params.get('id');
      //this.noticias$ = this.newsService.obtenerNoticias('general', 'US');
      
  })
}

}
