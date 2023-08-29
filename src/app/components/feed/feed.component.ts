import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Observer } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})

export class FeedComponent implements OnInit {
  noticias$: Observable<{ articles: Article[] }> | undefined;
  // noticiasSecundarias: any;
  // noticiasPrincipales: any;
  selectedArticle: Article | undefined;

  constructor(private newsService: NewsService,
              private route: ActivatedRoute,) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const selecionarCategoria = params.get('categoria');
      this.noticias$ = this.newsService.obtenerNoticias(selecionarCategoria ?? 'general', 'US');

      // this.noticias$.forEach((element: any,index: number) => {
      //   index < 10 ? this.noticiasPrincipales.push(element) : this.noticiasSecundarias.push(element);
      // });

    });

  }

  onSelectArticle(article: Article) {
    this.selectedArticle = article;

    console.log('Article', this.selectedArticle);
  }

  onCloseArticle() {
    this.selectedArticle = undefined;

  }

}


// export class FeedComponent implements OnInit {
//   noticias: Article[] = [];
//   noticiasPrincipales: Article[] = [];
//   noticiasSecundarias: Article[] = [];

//     constructor(
//       private route: ActivatedRoute,
//       private newsService: NewsService ) { }

//     ngOnInit(): void {
//       this.route.paramMap.subscribe(params => {
//         const selecionarCategoria = params.get('categoria');
//       this.obtenerNoticias(selecionarCategoria?? 'general');
//     });
//   }

//     obtenerNoticias(selecionarCategoria: string): void {
//       // const categoria = 'general'; // Cambia a la categoría deseada
//       const pais = 'US'; // Cambia al país deseado

//       const observer$: Observer<any> = {
//         next: (response) => {
//           this.noticias = response.articles;
//           console.log('Noticias',this.noticias);


//           this.noticias.forEach((element, index) => {
//             index < 10 ? this.noticiasPrincipales.push(element) : this.noticiasSecundarias.push(element);
//         });

//           // this.noticias.forEach((element, index) => {
//           //     if(index < 10){
//           //       this.noticiasPrincipales.push(element)
//           //     }
//           //     else{
//           //       this.noticiasSecundarias.push(element)
//           //     }
//           // });

//         },
//         error: (error) => {
//           console.error(error);
//         },
//         complete: () => {
//           console.log('Completado');
//         }
//       }

//       this.newsService.obtenerNoticias(selecionarCategoria, pais).subscribe(observer$);



//       // Forma obsoleta de suscribirse a un observable

//       // this.newsService.obtenerNoticias(categoria, pais).subscribe(
//       //   (response) => {
//       //     this.noticias = response.articles;
//       //     console.log(this.noticias);
//       //   },
//       //   (error) => {
//       //     console.error(error);
//       //   }
//       // );
//     }

// }
