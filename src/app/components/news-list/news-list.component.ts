import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent {
  @Input() listNews: any[] = [];

  trackByFn(index: number, item: any): any {
    return item.link || index;
  }
}
