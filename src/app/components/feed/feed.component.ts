import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Observer } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})

export class FeedComponent implements OnInit {
  noticias$: Observable<{ articles: Article[] }> | undefined;

  constructor(private newsService: NewsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const selectedCategory = params['category'];
      this.noticias$ = this.newsService.obtenerNoticias('general', 'US');
      console.log('Noticias', this.noticias$);
    });
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
