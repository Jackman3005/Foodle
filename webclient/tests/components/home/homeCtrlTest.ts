///<reference path="../../../typings/tsd.d.ts"/>
///<reference path="../../../app/components/home/homeCtrl.ts"/>

describe("HomeCtrl", () => {

	var $controller : ng.IControllerService;
	var $scope : Foodle.Home.Controllers.IHomeScope;

	beforeEach(angular.mock.module('FoodleApp'));

	beforeEach(() => {
		angular.mock.inject(function (_$controller_, $rootScope) {
			$controller = _$controller_;
			$scope = $rootScope.$new();
		});

		new Foodle.Home.Controllers.HomeCtrl($scope);

	});

	describe("initialization", ()=>{
		it('sets testName on scope', function() {
			expect($scope.testName).toEqual("It Works!");
		});
	});

});
