///<reference path="../../../typings/tsd.d.ts"/>

module Foodle.Home.Controllers {
	export interface IHomeScope extends angular.IScope {
		testName : string;
	}

	export class HomeCtrl {
		lastSetName : string;

		//Haven't figured out why this is needed yet. Copied from example
		public static $inject = ['$scope'];

		constructor(private $scope: IHomeScope) {
			$scope.testName = "It Works!";
			this.lastSetName = $scope.testName;
		}
	}
}
