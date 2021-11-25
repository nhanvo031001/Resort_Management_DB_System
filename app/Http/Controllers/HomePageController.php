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

        $categories = Category::all();
        $books = Book::all();
        // foreach ($categories as $category) {
        //     echo $category->name;
        //     echo $category->image;
        // }


        $isLogin = false;
        $username = null;
        if (Auth::check()) {
            $isLogin = true;
            $username = Auth::user()->username;
        }
        return view('homepage')->with([
            'categories' => $categories,
            'books' => $books,
            'isLogin' => $isLogin,
            'username' => $username
        ]);
    }
}
