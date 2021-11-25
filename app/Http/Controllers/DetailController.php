<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Book;
use App\Category;

use Illuminate\Support\Facades\Auth;

class DetailController extends Controller
{
    //
    public function index(Request $request, $id) {
        if (!ctype_digit($id)) {
            abort(404);
        }
        $book = Book::where('book_id', $id)->first();
        if (!$book) {
            abort(404);
        }
        $category = Category::where('category_id', $book->cid)->first();

        $isLogin = false;
        $username = null;
        if (Auth::check()) {
            $isLogin = true;
            $username = Auth::user()->username;
        }

        return view("detail")->with([
            'book' => $book,
            'category' => $category,
            'isLogin' => $isLogin,
            'username' => $username
        ]);
    }
}
