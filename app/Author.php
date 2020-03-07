<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    protected $guarded = ['id'];

    /**
     * Get the comments for the blog post.
     */
    public function books()
    {
        return $this->hasMany(Book::class);
    }
}
