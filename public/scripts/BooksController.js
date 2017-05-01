angular
  // .module('booksApp', ['ngRoute'])
  .module('booksApp')
  .controller('BooksController', BooksController)

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

// vm.editBook = function(book) {
//   $http({
//     method: 'PUT',
//     url; '/' + $routeParams.id + '/books/ + book._id',
//     data:book
//   }).then(function successCallback(json) {
//
//   }, function errorCallback(response) {
//     console.log("There was an error editing the data", response);
//   });
// }
