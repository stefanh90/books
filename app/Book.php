<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $guarded = ['id'];

    /**
     * Get the comments for the blog post.
     */
    public function author()
    {
        return $this->belongsTo(Author::class);
    }

    /**
     * Get the comments for the blog post.
     */
    public function publisher()
    {
        return $this->belongsTo(Publisher::class);
    }
}
