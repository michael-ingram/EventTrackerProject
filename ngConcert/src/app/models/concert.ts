export class Concert {

  id: number;
  venue: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  concertDate: string;
  concertTime: string;
  //TODO Other properties
  constructor(
    id: number = 0,
    venue: string = '',
    street: string = '',
    city: string = '',
    state: string = '',
    zip: string = '',
    concertDate: string = '',
    concertTime: string = ''
  ){
    this.id = id;
    this.venue = venue;
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.concertDate = concertDate;
    this.concertTime = concertTime;
  }
}
