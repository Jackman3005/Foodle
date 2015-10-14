///<reference path="../typings/tsd.d.ts"/>
///<reference path="../app/components/home/homeCtrl.ts"/>

module Foodle
{
	var app = angular.module('FoodleApp', ['ui.router']);

	app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider : angular.ui.IStateProvider,
	                                                              $urlRouterProvider : angular.ui.IUrlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('root', {
				url: '/',
				controller: Foodle.Home.Controllers.HomeCtrl,
				templateUrl: 'app/components/home/home.html'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'app/components/about/about.html',
				controller: 'AboutController'
			});

	}]);
}
