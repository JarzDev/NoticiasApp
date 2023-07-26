import { Component } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listNews:any =[]=[];
  constructor(private newsSvc : NewsService){}
  
  title = 'noticiasApp';

  searchNews(params: any){
    this.newsSvc.getNewsByParams(params).subscribe(resp => {
      console.log(resp);
 this.listNews = resp.results;
    },
    err => console.log(err)
    );
  }

  searchNewsBySearch(data: any){
    this.newsSvc.getNewsBySearch(data).subscribe(resp => {
      console.log(resp);
  this.listNews = resp.results;
    },
    err => console.log(err)
    );
  }
}
