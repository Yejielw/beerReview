app.factory('beersModel', function() {

	var users = [{
		user: 'admin',
		password: 123,
		LoggedIn: false
	}]


	var beers = [{
		name: 'Corona',
		style: 'Lager',
		rating: [4],
		abv: 4.5,
		img: 'data:image/jpeg;base64,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'
		},
		{
		name: 'Heineken',
		style: 'Blonde',
		rating: [5],
		abv: 5,
		img: 'data:image/jpeg;base64,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'
		},
		{
		name: 'Goldstar',
		style: 'Dark Lager',
		rating: [2],
		abv: 3,
		img: 'data:image/jpeg;base64,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'
		}
	];
	
	var avg = [0];

	var doAvg = function(){
		for (var i = 0; i < beers.length; i++) {
			avg[0] = avg[0] + beers[i].rating
			console.log(avg[0])
			console.log(beers[i].rating)
		}
	}
 
	var addBeer = function (a, b, c, d, e){
		var tempBeer = {
			name: a,
			style: b,
			rating: [c],
			abv: d,
			img: e
		};
		beers.push(tempBeer);
		doAvg();
		
	};

	var remove= function (item) {
		beers.splice(item, 1)
		doAvg();
	};

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

	var login = function (user, pass) {
		if (user == users[0].user && pass == users[0].password){
			users[0].LoggedIn = true;
		}else {
			alert('incorrect information')
		};
		
	};
	var logout = function () {
		users[0].LoggedIn = false;
	};

	var rate = function (item, val) {
		var temp = item.$index;
		var temVal = val;
		beers[temp].rating.push(temVal)
		//temp.rating.push(temVal);
		console.log( beers[temp].rating+ '-' + temVal)
	}



	var beersObj = {
		beers: beers,
		add: addBeer,
		removeBeer: remove,
		sortA: sortBeersA,
		sortD: sortBeersB,
		avg: avg,
		doA: doAvg,
		login: login,
		user: users[0],
		logout: logout,
		rate: rate
	};

	return beersObj;
});