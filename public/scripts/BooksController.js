console.log('BooksController.js started');

angular
  // .module('booksApp', ['ngRoute'])
  .module('booksApp')
  .controller('BooksController', BooksController)

BooksController.$inject = ['$http'];
function BooksController ($http, $routeParams) {
  var vm = this;

  console.log("line 11");
  // BooksController.$inject= ['$http'];
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
    //  end of $http({
  }).then(function successCallback(response) {
    vm.book = response.data;
    vm.test ='sanity check for vm';
    console.log(vm.book);
    console.log(vm);
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  }  //  function errorCallback
  ) // curved bracket -  //  then(function successCallback
}  //  function booksController
