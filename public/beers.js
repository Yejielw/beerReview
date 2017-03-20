app.factory('beersModel', function($http) {

////////////////////////////
// Gobal Variables to //////
// Make app work ///////////
////////////////////////////

	var editing = [];
	var beers = [];
	var tempBeer;

///////////////////////////////////////////
// Getting, editing and adding new Beers //
///////////////////////////////////////////

	var getBeers = function () {
		return $http.get('/beers')
		    .then(function(response) {
		      angular.copy(response.data, beers);
		    }, function(err) {
		      console.error(err);
	    });
	};

	var addBeer = function (a, b, c, d, e){
		var tempBeer ={
			name: a,
			style: b,
			rating: [d],
			abv: c,
			image_url: e
		};
		$http.post('/beers', tempBeer)
		   .then(function(response){
		   	getBeers();
		   });		
	};

	var remove = function(beerToRemove){
   		return $http.delete('/beers/' + (beerToRemove._id))
   			.then(function(response) {
      			getBeers();
      		});
   	};

	var editBeer = function(index) {
	    tempBeer = angular.copy(beers[index]);
	    editing[index] = true;

	};

	var cancelEdit = function(index) {
	  	beers[index] = angular.copy(tempBeer);
		editing[index] = false;
	};

	var updateBeer = function(beer, index) {
	  editing[index] = false;
	    return $http.put('/beers/' + (beer._id), beer)
   			.then(function(response) {
      			getBeers();
      		})
	    .catch(function(err) {
	      alert('There was an error, No data was changed');
	      beers[index] = angular.copy(tempBeer);
	    })  
	};

///////////////////////////////
// Sorting The beers locally //
///////////////////////////////

	var sortBeersA= function () {
		beers.sort(function(a, b) {
	    return parseFloat(a.rating) - parseFloat(b.rating);
		});
	};
	var sortBeersB= function () {
		beers.sort(function(a, b) {
	    return parseFloat(a.rating) + parseFloat(b.rating);
		});
	};

/////////////////////
// Login Functions //
/////////////////////

	var users = [{
		user: 'admin',
		password: 123,
		LoggedIn: false
	}];

	var login = function (user, pass) {
		if (user == users[0].user && pass == users[0].password){
			users[0].LoggedIn = true;
		}else {
			alert('incorrect information');
		};
		
	};
	var logout = function () {
		users[0].LoggedIn = false;
	};

//////////////////////////////////
// Returning Object For factory //
// Model Angular /////////////////
//////////////////////////////////

	var beersObj = {
		beers: beers,
		getBeers: getBeers,
		add: addBeer,
		removeBeer: remove,
		editing: editing,
		editBeer: editBeer,
		cancelEdit: cancelEdit,
		updateBeer: updateBeer,
		sortA: sortBeersA,
		sortD: sortBeersB,
		login: login,
		user: users[0],
		logout: logout
	};

	return beersObj;
});
