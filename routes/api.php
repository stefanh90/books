<?php

use App\Publisher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Book;
use App\Author;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are lWe’ve also added the response()->json() call to our endpoints. This lets us explicitly return JSON data as well as send an HTTP code that can be parsed by the client. The most common codes you’ll be returning will be:

oaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('books/all', function() {
    // If the Content-Type and Accept headers are set to 'application/json',
    // this will return a JSON structure. This will be cleaned up later.
    return Book::with('author','publisher')->get();
});

Route::get('books/highlighted', function() {
    // If the Content-Type and Accept headers are set to 'application/json',
    // this will return a JSON structure. This will be cleaned up later.
    return Book::with('author','publisher')->where(['featured' => 1])->get();
});


Route::get('books/{id}', function($id) {
    return Book::with('author','publisher')->find($id);
});

Route::get('publishers/all', function() {
    // If the Content-Type and Accept headers are set to 'application/json',
    // this will return a JSON structure. This will be cleaned up later.
    return Publisher::all();
});

Route::get('publishers/{id}', function($id) {
    return Publisher::with('books')->find($id);
});

Route::get('authors/all', function() {
    // If the Content-Type and Accept headers are set to 'application/json',
    // this will return a JSON structure. This will be cleaned up later.
    return Author::get();
});

Route::get('authors/{id}', function($id) {
    return Author::with('books')->find($id);
});

Route::post('search/elastique',function(Request $request) {
    $search =  $request->search;

    $books = '';

    if (trim($request->search)) {
        $books = Book::where('title','LIKE',"%{$search}%")
                     ->orderBy('created_at','DESC')->limit(10)->get();

        $books = $books->map(function ($book, $key) {
            return [
                'title' => $book['title'],
                'id'  => $book['id'],
            ];
        });
    }

    return $books;
});
