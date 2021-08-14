import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Concert } from '../models/concert';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConcertsService {
  private concerts: Concert[] = [];
  baseUrl = 'http://localhost:8084';
  url = this.baseUrl + '/api/Concerts';

  httpOptions = {
    headers: {
      'Content-type' : 'application/json'
    }
  };

  constructor(
    private http: HttpClient,

  ) { }

  index(): Observable<Concert[]>{
    return this.http.get<Concert[]>(this.url).pipe(
      catchError((err: any) => {
        console.log('ConcertService.index() err retrieving concert list');
        return throwError(err);
      })
    )
  }

  public show(concertId: any): Observable<Concert>{
    return this.http.get<Concert>(`${this.url}/${concertId}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
      )
    ;
  }


  public create(concert: Concert){

    // this.todos.push(todo);
    return this.http.post<Concert>(this.url, concert).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(
          'error creating concert' + err
        )
      }

      )
    )
  }
  public update(concert: Concert){
    for(let i = 0; i < this.concerts.length; i++){
      if(this.concerts[i].id == concert.id){
        this.concerts[i] = concert;

      }
    }

    return this.http.put<Concert>(this.url + '/' + concert.id, concert,  this.httpOptions).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(
          'error updating todo' + err
        )
      }


    )
    )
  }

  public destroy(id: number){

    return this.http.delete<Concert>(this.url + '/' + id, this.httpOptions).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(
          'error deleting todo' + err
        )
      }


    )
    )
  }




}
