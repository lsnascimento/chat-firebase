(function () {
	angular.module('ChatAPP').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
	$urlRouterProvider.otherwise('/');

	$stateProvider
	    .state('home', {
	      url 		  : '/',
	      templateUrl : 'views/home/home.html',
	      controller  : 'HomeCtrl',
	      controllerAs: 'vm'
	    });
	}]);
})();