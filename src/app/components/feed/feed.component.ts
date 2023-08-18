import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Observer } from 'rxjs';
import { Article } from 'src/app/models/article.model';
// import { MatCardModule } from '@angular/material/card';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],

  // standalone: true,
  // imports: [MatCardModule, MatButtonModule, MatIconModule],

})


export class FeedComponent implements OnInit {
  noticias: Article[] = [];


    constructor( private newsService: NewsService ) { }

    ngOnInit(): void {
      this.obtenerNoticias();

    }

    obtenerNoticias(): void {
      const categoria = 'general'; // Cambia a la categoría deseada
      const pais = 'mx'; // Cambia al país deseado

      const observer: Observer<any> = {
        next: (response) => {
          this.noticias = response.articles;
          console.log(this.noticias);
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          console.log('Completado');
        }
      }

      this.newsService.obtenerNoticias(categoria, pais).subscribe(observer);

      // this.newsService.obtenerNoticias(categoria, pais).subscribe(
      //   (response) => {
      //     this.noticias = response.articles;
      //     console.log(this.noticias);
      //   },
      //   (error) => {
      //     console.error(error);
      //   }
      // );
    }

}
