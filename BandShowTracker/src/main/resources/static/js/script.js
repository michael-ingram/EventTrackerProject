window.addEventListener('load', (e)=>{
	console.log('script.js loaded');
	init();
});

function init(){
	loadConcerts();

	document.newConcertForm.addConcert.addEventListener('click', function(e){
		e.preventDefault();
		let fm = document.newConcertForm;
		let newConcert = {
			venue: fm.venue.value,
			street: fm.street.value,
			city: fm.city.value,
			state: fm.state.value,
			zip: fm.zip.value,
			concertDate: fm.concertDate.value,
			concertTime: fm.concertTime.value
		};
		createConcert(newConcert);
	});

	
}

function loadConcerts(){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/Concerts');
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status < 400){
				let concerts = JSON.parse(xhr.responseText);
				displayConcerts(concerts);
			}
		}
	};
	xhr.send();
}

// Show All concerts
function displayConcerts(concerts){
	// document.getElementById('concertListDiv').innerHTML = "";
	let concertDiv = document.getElementById('concertListDiv');
	let table = document.createElement('table');
	table.id = "concertListTable";
	table.name = "concertTable";
	
	let concertCount = 0;

	let thead = document.createElement('thead');
	table.appendChild(thead);
	let trHead = document.createElement('tr');
	thead.appendChild(trHead);

	let thVenue = document.createElement('th');
	thVenue.textContent = 'Venue';
	trHead.appendChild(thVenue);

	let thStreet = document.createElement('th');
	thStreet.textContent = 'Street';
	trHead.appendChild(thStreet);

	let thCity = document.createElement('th');
	thCity.textContent = 'City';
	trHead.appendChild(thCity);

	let thState = document.createElement('th');
	thState.textContent = 'State';
	trHead.appendChild(thState);

	let thZip = document.createElement('th');
	thZip.textContent = 'Zip';
	trHead.appendChild(thZip);

	let thDate = document.createElement('th');
	thDate.textContent = 'Date';
	trHead.appendChild(thDate);

	let thTime = document.createElement('th');
	thTime.textContent = 'Time';
	trHead.appendChild(thTime);

	// let tbody = document.createElement('tbody')
	// table.appendChild(tbody);
	for(const concert of concerts){
		let tr = document.createElement('tr');
		let td1 = document.createElement('td');
		let td2 = document.createElement('td');
		let td3 = document.createElement('td');
		let td4 = document.createElement('td');
		let td5 = document.createElement('td');
		let td6 = document.createElement('td');
		let td7 = document.createElement('td');
		let detailsBtn = document.createElement('button');
		detailsBtn.addEventListener('click', function(e){
			e.preventDefault();
			console.log('event listener worked')
			showConcertDetails(concert);
		});
		td1.textContent = concert.venue;
		td2.textContent = concert.street;
		td3.textContent = concert.city;
		td4.textContent = concert.state;
		td5.textContent = concert.zip;
		td6.textContent = concert.concertDate;
		td7.textContent = concert.concertTime;
		detailsBtn.name = "detailsBtn";
		detailsBtn.textContent = "Details";
		detailsBtn.id = `concert${concert.id}`
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
		tr.appendChild(td6);
		tr.appendChild(td7);
		tr.appendChild(detailsBtn);
		tr.id = `tr${concert.id}`
		
		concertCount ++;
		
		table.appendChild(tr);
		}
	
	// ConcertDiv.removeChild(ConcertDiv.firstElementChild);
	
		
	

	let countHeader = document.createElement('h3');
	countHeader.textContent = `Total Upcoming Shows: ${concertCount}`;
              
	while(concertDiv.firstChild) {
		concertDiv.removeChild(concertDiv.firstChild);
	}
	concertDiv.appendChild(table);

	concertDiv.appendChild(countHeader);
}

// Show single concert

function getConcert(concertId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/Concerts/' + concertId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let concert = JSON.parse(xhr.responseText);
				displayConcert(concert);
			}
			else {
				displayError('Concert not found');
			}
		}
	};
	xhr.send();
}

function showConcertDetails(concert) {
	var dataDiv = document.getElementById('concertData');
	dataDiv.textContent = '';
	let h1 = document.createElement('h1');
	h1.textContent = concert.venue;
	dataDiv.appendChild(h1);
	// let bq = document.createElement('blockquote');
	// bq.textContent = film.description;
	// dataDiv.appendChild(bq);
	let ul = document.createElement('ul');
	let li = document.createElement('li');
	li.textContent = 'Date ' + concert.concertDate;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'Time: ' + concert.concertTime;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'Street ' + concert.street;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'City: ' + concert.city;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'State: ' + concert.state;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = 'Zipcode: ' + concert.zip;
	ul.appendChild(li);

	let editForm = document.createElement('form');
	editForm.name = "editForm";
	let venueInput  = document.createElement('input');
	let venueLabel = document.createElement('label');
	venueLabel.textContent = "Venue:";
	venueLabel.for = "venueUpdateInput";
	venueInput.type= "text";
	venueInput.name = "venueUpdateInput";

	let streetInput  = document.createElement('input');
	let streetLabel = document.createElement('label');
	streetLabel.textContent = "Street:";
	streetLabel.for = "streetUpdateInput";
	streetInput.type= "text";
	streetInput.name = "streetUpdateInput";

	let cityInput  = document.createElement('input');
	let cityLabel = document.createElement('label');
	cityLabel.textContent = "City:";
	cityLabel.for = "cityUpdateInput";
	cityInput.type= "text";
	cityInput.name = "cityUpdateInput";

	let stateInput  = document.createElement('input');
	let stateLabel = document.createElement('label');
	stateLabel.textContent = "State:";
	stateLabel.for = "stateUpdateInput";
	stateInput.type= "text";
	stateInput.name = "stateUpdateInput";

	let zipInput  = document.createElement('input');
	let zipLabel = document.createElement('label');
	zipLabel.textContent = "Zip Code:";
	zipLabel.for = "zipUpdateInput";
	zipInput.type= "text";
	zipInput.name = "zipUpdateInput";

	let dateInput  = document.createElement('input');
	let dateLabel = document.createElement('label');
	dateLabel.textContent = "Date:";
	dateLabel.for = "dateUpdateInput";
	dateInput.type= "text";
	dateInput.name = "dateUpdateInput";

	let timeInput  = document.createElement('input');
	let timeLabel = document.createElement('label');
	timeLabel.textContent = "Time:";
	timeLabel.for = "timeUpdateInput";
	timeInput.type= "text";
	timeInput.name = "timeUpdateInput";

	dataDiv.appendChild(ul);
	editForm.appendChild(venueLabel);
	editForm.appendChild(venueInput);

	editForm.appendChild(streetLabel);
	editForm.appendChild(streetInput);

	editForm.appendChild(cityLabel);
	editForm.appendChild(cityInput);
	
	editForm.appendChild(stateLabel);
	editForm.appendChild(stateInput);

	editForm.appendChild(zipLabel);
	editForm.appendChild(zipInput);
	
	editForm.appendChild(dateLabel);
	editForm.appendChild(dateInput);

	editForm.appendChild(timeLabel);
	editForm.appendChild(timeInput);

	dataDiv.appendChild(editForm);

	
	let updateBtn = document.createElement('button');
	updateBtn.textContent = "Update";
	updateBtn.name = "updateBtn";
	updateBtn.addEventListener('click', function(e){
		e.preventDefault();
		let updateForm = document.editForm;
		let updatedShow = {
			venue: updateForm.venueUpdateInput.value,
			street: updateForm.streetUpdateInput.value,
			city: updateForm.cityUpdateInput.value,
			state: updateForm.stateUpdateInput.value,
			zip: updateForm.stateUpdateInput.value,
			concertDate: updateForm.dateUpdateInput.value,
			concertTime: updateForm.timeUpdateInput.value
		};
		updateConcert(updatedShow, concert.id);
	});




	let deleteBtn = document.createElement('button');
	deleteBtn.textContent = "Delete";
	deleteBtn.name = "deleteBtn";
	deleteBtn.addEventListener('click', function(e){
		e.preventDefault();
		console.log('delete event listener worked')
		deleteConcert(concert.id);
		dataDiv.textContent = '';
		
	});

	
	dataDiv.appendChild(updateBtn);
	dataDiv.appendChild(deleteBtn);
	document.newConcertForm.reset();
}
function displayError(msg) {
	var dataDiv = document.getElementById('concertData');
	dataDiv.textContent = msg;
}

function createConcert(concert) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/Concerts');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201 || xhr.status === 200) {
				// let newConcert = JSON.parse(xhr.responseText);
				// displayConcert(newConcert);
				//reset table
				// let tableDiv = document.getElementById('concertListDiv');
				// tableDiv = document.createElement('div')
				loadConcerts();
			}
			else {
				displayError('Error creating concert: ' + xhr.status);
			}
		}
	};
	xhr.setRequestHeader("Content-type", "application/json"); 
	let concertJson = JSON.stringify(concert);
	xhr.send(concertJson);
}

function deleteConcert(concertId) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/Concerts/'+concertId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 204 || xhr.status === 200) {
				console.log('deleted concert with id: '+ concertId);
				loadConcerts();
			}
			else {
				displayError('Error deleting concert: ' + xhr.status);
			}
		}
	};
	// xhr.setRequestHeader("Content-type", "application/json"); 
	// let concertJson = JSON.stringify(concert);
	xhr.send();
	// location.reload();
}

function updateConcert(concert, concertId) {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/Concerts/'+concertId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status < 400) {
				console.log('updated concert with id: ' + concertId);
				loadConcerts();
			}
			else {
				displayError('Error creating concert: ' + xhr.status);
			}
		}
	};
	xhr.setRequestHeader("Content-type", "application/json"); 
	let concertJson = JSON.stringify(concert);
	xhr.send(concertJson);
}

