<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Book;
use App\Category;

use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Auth;



class CategoryController extends Controller
{
    //
    public function index(Request $request, $type) {
        $books = DB::table('book')->join('category', 'book.cid', '=', 'category.category_id');
        $returnType = NULL;
        if (!ctype_digit($type)) {
            if ($type == 'best_seller') {
                $books = $books->orderBy('num_sale', 'DESC')->take(10)->get();
                $returnType = "Best seller";
            }
            else if ($type == "special_discount") {
                $books = $books->orderBy('sale', 'DESC')->take(10)->get();
                $returnType = "Special Discount";
            }
            else if ($type == "popular_week") {
                $books = $books->orderBy('num_view', 'DESC')->take(10)->get();
                $returnType = "Popular This Week";
            }
            else abort(404);
        }
        else {
            $books = $books->where('cid', $type)->get();
            if (count($books->toArray()) == 0) abort(404);
            else {
                $category = DB::table('category')->where('category_id', $type)->get();
                $returnType = ($category->toArray())[0]->category_name;
            }
        }
        // return view('category')->with('books', $books)->with('category', $returnType);

        $isLogin = false;
        $username = null;
        if (Auth::check()) {
            $isLogin = true;
            $username = Auth::user()->username;
        }


        return view('category')->with([
            'books' => $books,
            'category' => $returnType,
            'isLogin' => $isLogin,
            'username' => $username
        ]);
    }
}
