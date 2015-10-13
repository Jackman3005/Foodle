(function () {
	'use strict';

	var app = angular.module('foodle', ['ui.router']);

	app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('root', {
				url: '/',
				controller: 'HomeController',
				templateUrl: 'app/components/home/home.html'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'app/components/about/about.html',
				controller: 'AboutController'
			});

	}]);

})();