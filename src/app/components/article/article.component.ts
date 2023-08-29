import { Component, Input} from '@angular/core';
import { Article } from 'src/app/models/article.model';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  @Input() article: Article | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log('Article hijo', this.article);
  }
}

