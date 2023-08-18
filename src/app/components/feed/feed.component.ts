import { Component } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  noticias: any[] = [];
  
    constructor( private newsService: NewsService ) { }
  
    ngOnInit(): void {
      this.obtenerNoticias();

    }

    obtenerNoticias(): void {
      const categoria = 'general'; // Cambia a la categoría deseada
      const pais = 'mx'; // Cambia al país deseado
  
      this.newsService.obtenerNoticias(categoria, pais).subscribe(
        (response) => {
          this.noticias = response.articles;
          console.log(this.noticias);
        },
        (error) => {
          console.error(error);
        }
      );
    }
    
}
