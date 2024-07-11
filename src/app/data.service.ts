import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private sseUrl = 'http://localhost:5000/api/sse';
  private dbApiUrl = 'http://localhost:5000/api/data';

  constructor(private http: HttpClient) {}

  getSSEData(): Observable<any> {
    return new Observable((observer) => {
      const eventSource = new EventSource(this.sseUrl);

      eventSource.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data && Object.keys(data).length > 0) observer.next(data);
        } catch (error) {
          console.error('Error parsing SSE data:', error);
        }
      };

      eventSource.onerror = (error) => {
        observer.error(error);
      };
    });
  }
  getAllDbData(): Observable<any[]> {
    return this.http.get<any[]>(this.dbApiUrl);
  }
}
