<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Book;
use App\Category;

use Illuminate\Support\Facades\Auth;

class HomePageController extends Controller
{
    //
    public function index() {
        return view('login');
    }
}
