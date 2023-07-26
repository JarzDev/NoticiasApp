import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http: HttpClient){ }

  getNewsByParams(params: any): Observable<any>{
  const  Url = `https://newsdata.io/api/1/news?apikey=pub_261314f5a963b44bb6c1381fa28a0ca55dbb7&country=${params.pais}&language=es&category=${params.categoria}`;

  
  
  // https://newsapi.org/v2/top-headlines?country=${params.pais}&category=${params.categoria}&apiKey=ced0765d260c4a258d06181e5ff10576
  return this.http.get(Url);
  
}

getNewsBySearch(data: any): Observable<any>{
  const  Url = `https://newsdata.io/api/1/news?apikey=pub_261314f5a963b44bb6c1381fa28a0ca55dbb7&q=${data.text} `;
 // https://newsapi.org/v2/everything?q=${data.text}&from=2023-06-12&sortBy=publishedAt&apiKey=ced0765d260c4a258d06181e5ff10576
   
  
  
  return this.http.get(Url);
  
}
}

