angular
  .module('booksApp', ['ngRoute'])
  .config(config)
  // .controller('BooksController', BooksController)

  config.$inject = ['$routeProvider', '$locationProvider'];
  function config ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../../templates/insert.html',
        controllerAs: 'booksCtrl',
        controller: 'BooksController'
      })
    .when('/:id', {
      templateUrl: '../../templates/insert.html',
      controllerAs: 'booksChangeCtrl',
      controller: 'BooksChangeController'
    })
    .otherwise({
      redirectTo: '/'
    });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}   //  function config ($routeProvider
