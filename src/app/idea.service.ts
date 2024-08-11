import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  private apiUrl = '/api/ideas'; // Menggunakan proxy

  constructor(private http: HttpClient) {}

  getIdeas(pageNumber: number = 1, pageSize: number = 10, sort: string = '-published_at'): Observable<any> {
    const params = new HttpParams()
      .set('page[number]', pageNumber.toString())
      .set('page[size]', pageSize.toString())
      .append('append[]', 'small_image')
      .append('append[]', 'medium_image')
      .set('sort', sort);

    return this.http.get<any>(this.apiUrl, { params });
  }
}
