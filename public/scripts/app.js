console.log('app.js INSIDE public started');

angular
  .module('booksApp', ['ngRoute'])
  .config(config)
  // .controller('BooksController', BooksController)

  config.$inject = ['$routeProvider', '$locationProvider'];
  function config ($routeProvider, $locationProvider) {
    console.log('config function working');
    $routeProvider
      .when('/', {
        templateUrl: '../../templates/insert.html',
        controllerAs: 'booksCtrl',
        controller: 'BooksController'
      })
    .otherwise({
      redirectTo: '/'
    });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}   //  function config ($routeProvider
