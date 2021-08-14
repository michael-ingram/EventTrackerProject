import { Component, OnInit } from '@angular/core';
import { Concert } from 'src/app/models/concert';
import { ConcertsService } from 'src/app/services/concerts.service';

@Component({
  selector: 'app-concert-list',
  templateUrl: './concert-list.component.html',
  styleUrls: ['./concert-list.component.css']
})
export class ConcertListComponent implements OnInit {
  concerts: Concert[] = [];

  newConcert = new Concert();
  editConcert : Concert | null = null;
  selected: Concert | null = null;

  constructor(private concertService: ConcertsService) { }

  ngOnInit(): void {
    this.loadConcerts();
  }

  loadConcerts(){
    this.concertService.index().subscribe(
      concerts => {
        this.concerts = concerts;
      },
      noConcerts => {
        console.error('ConcertListComponent.loadConcerts: error retireveing conert list')
      }
    )
  }

  displayTable(): void{
    this.selected = null;
  }
  getNumberOfConcerts(): number{
    let concertLength = this.concerts.length;
    return concertLength;

    // return this.incompletePipe.transform(this.todos, this.showComplete).length;
  }

  displayConcert(concert: Concert): void {
    this.selected = concert;
  }
  addTodo(): void{
    this.concertService.create(this.newConcert).subscribe(
      data => {
        this.loadConcerts();
      },
      err =>{
        console.log("error todos through service");
      }
    )
    this.newConcert = new Concert();
  }
  setEditConcert(): void{
    this.editConcert = Object.assign({}, this.selected);
  }

  updateConcert(concert: Concert){
    this.concertService.update(concert).subscribe(
      data => {
        this.loadConcerts();
      },
      err =>{
        console.log(err);
        console.log("error retrieving todos from service");
      }
    )
    this.editConcert = null;
    this.selected = null;
    // this.todos = this.todoService.index();
}
destroyConcert(id: number){
  this.concertService.destroy(id).subscribe(
    data => {
      this.loadConcerts();
    },
    err =>{
      console.log(err);
      console.log("error retrieving todos from service");
    }
  )
  // this.todos= this.todoService.index();

}

}
