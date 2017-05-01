console.log('BooksController.js started');

angular
  .module('booksApp', ['ngRoute'])
  .controller('booksController', BooksController)

BooksController.$inject = ['$http'];
function BooksController ($http, $routeParams) {
  var vm = this;

  // BooksController.$inject= ['$http'];
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
    //  end of $http({
  }).then(function successCallback(response) {
    vm.book = response.data;
    vm.test ='sanity check for vm';
    console.log(vm.test);
    console.log(vm);0
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  }  //  function errorCallback
  ) // curved bracket -  //  then(function successCallback
}  //  function booksController
