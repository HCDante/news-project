import { Component, OnInit } from '@angular/core';
import { LoreminsupmService } from 'src/app/services/loreminsupm.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  datos: any;

  constructor(private loreminsupmService: LoreminsupmService) { }

  ngOnInit(): void {
    this.loreminsupmService.getLoreminsupm(3).subscribe(data => {
      this.datos = data;
      console.log(this.datos);
    });
  }

}
