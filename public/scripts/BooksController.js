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
  vm.update = function updateTitle (book){
     $http({
      method: 'POST',
      url: 'https://super-crud.herokuapp.com/books/' + book._id,
      data: book
    }).then(function successCallback(response) {
      console.log("vm.firstLevelBooks.books is: ");
      console.log(vm.firstLevelBooks.books);
      vm.firstLevelBooks.books.push(response.data)
    }, function errorCallback(response) {
      console.log("There was an error editing the data", response);
    });
  }   //  vm.update

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
}
