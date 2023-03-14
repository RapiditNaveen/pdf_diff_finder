import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../interfaces/response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PdfDiffFinderService {
  constructor(private http: HttpClient) {}

  comparePdfFiles(file: any): Observable<Response> {
    return this.http.post<Response>('http://localhost:4000/api/comparePdfFiles', file);
  }
}
