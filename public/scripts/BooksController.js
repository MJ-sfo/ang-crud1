angular
  // .module('booksApp', ['ngRoute'])
  .module('booksApp')
  .controller('BooksController', BooksController)
  .controller('BooksChangeController', BooksChangeController)

BooksController.$inject = ['$http', '$routeParams'];
function BooksController ($http, $routeParams) {
  var vm = this;

  // BooksController.$inject= ['$http'];
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
    //  end of $http({
  }).then(function successCallback(response) {
    vm.firstLevelBooks = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  }  //  function errorCallback
  ) // curved bracket -  //  then(function successCallback
}  //  function booksController

BooksChangeController.$inject = ['$http', '$routeParams'];
function BooksChangeController ($http, $routeParams) {
  var vm = this;
  console.log('active BooksChangeController');
  $http({
    method: 'GET',
    url: '/'
  }).then(function successCallback(response) {
    vm.books = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  $http({
    method: 'POST',
    url: '/' + $routeParams.id + 'book._id',
    data: vm.books.book
  }).then(function successCallback(response) {
    vm.books.push(response.data)
  }, function errorCallback(response) {
    console.log("There was an error editing the data", response);
  });
}
