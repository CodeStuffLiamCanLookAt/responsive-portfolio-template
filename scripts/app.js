var myApp = angular.module('myApp', [
  'ngRoute',
  'portfolioControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/portfolio', {
    templateUrl: 'portfolio.html',
    controller: 'PortfolioController'
  }).
  when('/details/:itemId', {
    templateUrl: 'details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/portfolio'
  });
}]);