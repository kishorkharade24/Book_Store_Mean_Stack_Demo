bookApp
    .controller('bookCtrl', ['$scope', '$location', '$routeParams', '$route', 'DataService', function( $scope, $location, $routeParams, $route, DataService ) {
        
        $scope.book = {};
        $scope.search = '';
        $scope.activeBook = {};
        $scope.addBookAlert = false;
        
        $scope.showBookInfo = function( activeBook ) {
            $scope.activeBook = activeBook;
        }
        
        DataService.getAllBooks().success( function( data ) {
           $scope.books = data;
        });
        
        $scope.addBookPage = function() {
            $location.path('/addBookPage');
        }
        
        $scope.homePage = function() {
            $location.path('/');
        }
        
        $scope.saveBook = function() {
            var newBook = {
                title: $scope.title,
                author: $scope.author,
                category: $scope.category,
                description: $scope.description
            };
            
            DataService.saveBook( newBook ).success( function( data ) {
                if ( data !== null ) {
                    $scope.addBookAlert = true;
                } 
            });
        }
        
        $scope.getBook = function() {
            var id = $routeParams.id;
            
            DataService.getBook( id ).success( function( book ) {
                $scope.book = book;
            });
        }
        
        $scope.updateBook = function() {
            DataService.updateBook( $scope.book ).success( function( data ) {
                if( data !== null ){
                    $location.path('/');   
                }
            });
        }
        
        $scope.deleteBook = function( bookId ) {
            
            DataService.deleteBook( bookId ).success( function( data ) {
                if( data !== null ) {
                    $route.reload(); 
                }
            });
        }
        
    }]);