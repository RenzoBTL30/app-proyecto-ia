import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceIAService {

  constructor(private http: HttpClient) { }

  apiUrl:any = 'http://127.0.0.1:8000/generar_preguntas';

  private httpHeaders = new HttpHeaders(
    {'Content-Type': 'application/json'}
  );

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`, {headers: this.httpHeaders});
  }

  postData(textopdf:string, num_questions:number, habilidad:string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, 
    {
      textopdf:textopdf,
      num_questions:num_questions,
      habilidad:habilidad
    }, 
    {headers: this.httpHeaders});
  }

  
}
