# EventTrackerProject

### Full-Stack Spring/REST/JPA EventTrackerProject

### Overview

A Band website application for tracking the band's shows and includes information about the band with the purpose of finding more concerts to play. The website includes a home page, about page, contact page and an events page. The application includes a mysql database that stores concert information . The application all includes a soundcloud player to play the bands music.

## Technologies used
* Java RESTful services
* Angular
* JPA
* Spring Boot
* Java
* JavaScript
* HTML, CSS

![Image of Schema](https://i.imgur.com/FGUrYXH.png)

## REST Endpoints

| Method | URI                     | Request Body | Response Body | Purpose                   |
|--------|-------------------------|--------------|---------------|---------------------------|
| GET    |/api/Concerts            |              | All concerts  |Show all concerts          |
| GET    |/api/Concerts/{concertId}|              | Show single concert|Show specific concert by Id|
| POST   |/api/Concerts            |Concert| Concert| Add Concert To Database|
| PUT    |/api/Concerts/{concertId}| Concert      | Concert       |Update concert by specific Id|
| DELETE |/api/Concerts/{concertId}|              |               |Delete concert from database by Id|   

### Test Json

Example concert to add : {"venue": "Mishawaka Ampitheater", "street": "13714 Poudre Canyon Rd", "city": "Bellvue", "state": "CO", "zip": "80512", "concertDate": "2021-09-12", "concertTime": "20:00:00"}
