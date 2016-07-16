var express = require('express');
var router = express.Router();

// Import Book collection
var Book = require('../model/book');

// Router to get all books
router.get('/getAllBooks', function( req, res ){
    console.log('Getting all books...');    
    Book.getAllBooks( function( err, books ) {
        if ( err ) {
            res.send('Error while getting books : ' + err );
        } else {
            console.log( books );
            res.json( books );
        }
    });
});

// Router to get a particular book using it's id as url parameter
router.get('/getBookById/:id', function( req, res ){
    console.log('Getting one book...');    
    var id = req.params.id;
    
    Book.getBookById( id, function( err, book ) {
        if ( err ) {
            console.log('Error while getting book : ' + err );
        } else {
            console.log( book );
            res.json( book );
        }
    });
});

// Router to insert a book
router.post('/saveBook', function( req, res ) {
    console.log('Saving book in DB...');
    var newBook = {
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        description: req.body.description
    };
    
    Book.addNewBook( newBook, function( err, book ) {
        if( err ) {
            res.send("Error while saving the book : " + err );
        } else {
            console.log( book );
            res.send( book );
        }
    });
});

// Router to update a book
router.put('/updateBook', function( req, res ) {
    console.log('Updating book...');
    var id = req.body._id;
    
    var book = {
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        description: req.body.description
    };
    
    Book.updateBook( id, book, {}, function( err, updatedBook ) {
        if ( err ) {
            res.send("Error while updating book : " + err );
        } else {
            res.json( updatedBook );
        }
    });
});

// Router to delete a book
router.delete('/deleteBook/:id', function( req, res ) {
    console.log('Deleting book... : ' + req.params.id );
    var id = req.params.id;
    
    Book.deleteBook( id, function( err, deletedBook ) {
        if ( err ) {
            res.send("Error while deleting book : " + err );
        } else {
            console.log(deletedBook);
            res.json( deletedBook );
        }
    });
});

module.exports = router;