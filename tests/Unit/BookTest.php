<?php

namespace Tests\Feature;

use App\Book;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ArticleTest extends TestCase
{
    use RefreshDatabase;

    public function testBookPublisherAndAuthorAreCreatedCorrectly()
    {

        factory(\App\Author::class, 1)->create()->each(function ($author){
            $author->books()->saveMany(factory(\App\Book::class, 1)->make())->each(function ($book){
                $publisher = factory(\App\Publisher::class)->create();
                $book->publisher_id = $publisher->id;
                $book->save();
            });
        });
        $response = $this->json('GET', '/api/books/all', [], [])
                         ->assertStatus(200)
                         ->assertJsonStructure([
                             [ 'id', 'featured', 'publisher', 'author', 'created_at','updated_at' ],
                         ]);
    }


}
