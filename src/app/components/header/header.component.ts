import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from '../feed/feed.component';

const appRoutes = [{
  path: "feed", 
  component: FeedComponent, 
  pathMatch: "full"},
]
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('myDate') dateD :ElementRef | undefined;
  constructor(private render: Renderer2){
  }

  getDate(){
    let today = new Date().toString();
    let date =  today.split(' ');
   
  }
}
