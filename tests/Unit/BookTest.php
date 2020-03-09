<?php

namespace Tests\Feature;

use App\Book;
use App\Author;
use App\Publisher;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class BookTest extends TestCase
{
    use RefreshDatabase;

    public function testBookPublisherAndAuthorAreCreatedCorrectly()
    {
        $this->seed();

        $response = $this->json('GET', '/api/books/all', [], [])
                         ->assertStatus(200)
                         ->assertJsonStructure([
                             [ 'id', 'featured', 'publisher', 'author', 'created_at','updated_at' ],
                         ]);
    }

    public function testGettingPublisher()
    {
        $this->seed();

        $response = $this->json('GET', '/api/publishers/1', [], [])
                         ->assertStatus(200)
                         ->assertJsonStructure([
                              'id', 'name', 'created_at','updated_at','books',
                         ]);
    }

    public function testGettingAuthor()
    {
        $this->seed();

        $response = $this->json('GET', '/api/authors/1', [], [])
                         ->assertStatus(200)
                         ->assertJsonStructure([
                             'id', 'name', 'created_at','updated_at','books'
                         ]);
    }


    public function testGettingAllPublishers()
    {
        $this->seed();

        $response = $this->json('GET', '/api/publishers/all', [], [])
                         ->assertStatus(200)
                         ->assertJsonStructure([
                             [ 'id', 'name', 'created_at','updated_at'],
                         ]);
    }


    public function testGettingAllAuthors()
    {
        $this->seed();

        $response = $this->json('GET', '/api/authors/all', [], [])
                         ->assertStatus(200)
                         ->assertJsonStructure([
                             [ 'id', 'name', 'created_at','updated_at'],
                         ]);
    }

    public function seed()
    {
        factory(Author::class, 1)->create()->each(function ($author){
            $author->books()->saveMany(factory(Book::class, 1)->make())->each(function ($book){
                $publisher = factory(Publisher::class)->create();
                $book->publisher_id = $publisher->id;
                $book->save();
            });
        });
    }
}
