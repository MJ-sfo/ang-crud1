console.log('BooksController.js started');

angular
  .module('booksApp')
  .controller('booksController', BooksController)

booksController.$inject = ['$http'];
function booksController ($http, $routeParams) {
  var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
    //  end of $http({
  }).then(function successCallback(response) {
    vm.book = response.data;
    vm.test ='sanity check for vm';
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  }  //  function errorCallback
  ) // curved bracket -  //  then(function successCallback
}  //  function booksController
