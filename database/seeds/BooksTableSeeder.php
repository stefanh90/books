<?php

use Illuminate\Database\Seeder;

class BooksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Author::class, 1000)->create()->each(function ($author){
            $author->books()->saveMany(factory(\App\Book::class, 5)->make())->each(function ($book){
                $publisher = factory(\App\Publisher::class)->create();
                $book->publisher_id = $publisher->id;
                $book->save();
            });
        });
    }
}
