var bookApp = angular.module('bookFacts', ['ngRoute']);

bookApp.config(['$routeProvider', function( $routeProvider ) {
    $routeProvider
        .when('/', {
        templateUrl: '../views/home.html',
        controller: 'bookCtrl'
    })
    .when('/allBooks',{
        templateUrl: '../views/allBooks.html',
        controller: 'bookCtrl'
    })
    .when('/addBookPage', {
        templateUrl: '../views/insertBook.html',
        controller: 'bookCtrl'
    })
    .when('/contactPage', {
        templateUrl: '../views/contact.html',
        controller: 'bookCtrl'
    })
    .when('/book/edit/:id', {
        templateUrl: '../views/editBook.html',
        controller: 'bookCtrl'
    })
    .otherwise({
        redirectTo: '/'
    })
}]);