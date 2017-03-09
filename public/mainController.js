app.controller('mainCtrl', function($scope, beersModel) {

	$scope.beersObj = beersModel;
	console.log($scope.beersObj.logged)

});