app.controller('mainCtrl', function($scope, beersModel) {

	$scope.beersObj = beersModel;
	beersModel.getBeers();
});

