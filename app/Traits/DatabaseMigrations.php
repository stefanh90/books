<?php
namespace App\Traits;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Support\Facades\Artisan;
use Tests\CreatesApplication;

abstract class TestCase extends BaseTestCase
{

    use CreatesApplication, DatabaseMigrations;

    public function setUp():void
    {
        parent::setUp();
        Artisan::call('db:seed');
    }
}