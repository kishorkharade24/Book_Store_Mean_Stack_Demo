bookApp.factory('DataService', [ '$http', function( $http ) {
    var bookData = {};
    
    bookData.getAllBooks = function() {
        return $http.get('/api/books/getAllBooks');
    }
    
    bookData.saveBook = function( newBook ) {
        return $http.post('/api/books/saveBook', newBook);
    }
    
    bookData.getBook = function( id ) {
        return $http.get('/api/books/getBookById/' + id);
    }
    
    bookData.updateBook = function( book ) {
        return $http.put('/api/books/updateBook', book);
    }
    
    bookData.deleteBook = function( id ) {
        return $http.delete('/api/books/deleteBook/' + id);
    }
    
    return bookData;
}]);