<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\BookShop;

use Illuminate\Support\Facades\DB;          //myself

class BookShopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        //$books = DB::select("select * from book");
        //return $books;
        //echo "ahhaah";
        return DB::select("select * from book order by book_id asc");

    }

    // WRONG, but not use, so I have not fixed yet
    public function indexUser() {
        return DB::select("select * from user_account order by id asc");
    }

    public function indexCategories() {
        return DB::select("select * from category order by category_id asc");
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        // $book = DB::insert("insert into book values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        // [$request->input('title'), $request->input('id'), $request->input('author'), $request->input('category'),
        // $request->input('publisher'), $request->input('input_date'), $request->input('quantity'), $request->input('cost_price'),
        // $request->input('selling_price'), $request->input('page_number'), $request->input('sale'), $request->input('publish_date'), 
        // $request->input('language'), $request->input('picture'), $request->input('description')]);

        //find cid
        // $temp = 0;
        // echo $request->input('cid');
        // $temp = DB::select("select SUM(category_id) from category where category_name = ?", [$request->input('cid')]);
        // //print_r ($category_id);
        // echo ("pass print r");
        // print_r($temp);
        // echo ("pass echo");
        //echo $category_id[0];
        //echo ("pass echo 0");

        // tam thoi test cid la 1

        //$test = $request->input('image');
        //dd($test);
        //print_r($test);
        

        $book = DB::insert("insert into book(book_id, title, page_number, author, cost_price, selling_price, input_date, publish_date, sale, num_view, 
        language, image, quantity, publisher, description, num_sale, cid) 
        values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [$request->input('book_id'), $request->input('title'), $request->input('page_number'), $request->input('author'),
        $request->input('cost_price'), $request->input('selling_price'), $request->input('input_date'), $request->input('publish_date'),
        $request->input('sale'), $request->input('num_view'), $request->input('language'), $request->input('image'), $request->input('quantity'),
        $request->input('publisher'), $request->input('description'), $request->input('num_sale'), $request->input('cid')]);
    }



    public function fileStore(Request $request)
    {
        $upload_path = public_path('images');
        $file_name = $request->file->getClientOriginalName();
        //$generated_new_name = time() . '.' . $request->file->getClientOriginalExtension();
        //echo $generated_new_name;
        //$request->file->move($upload_path, $generated_new_name);
        $request->file->move($upload_path, $file_name);
         
        //$insert['title'] = $file_name;
        //$check = Photo::insertGetId($insert);
        //return response()->json(['success' => 'You have successfully uploaded "' . $file_name . '"']);
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        //echo $id;
        $book = DB::select("select * from book, category where book_id = ? and cid = category_id", [$id]);
        if ($book) {
            return $book;
        }
        return 'Not found user';

    }

    public function showUser() {
        // $user = DB::select("select * from users where user_id = ? ", [$id]);
        // if ($user) {
        //     return $user;
        // }
        // return 'Not found user manager';

        $user = DB::select("select * from users where role = ?", ["WarehouseManager"]);
        if ($user) {
            return $user;
        }
        return 'Not found user manager';
    }

    // public function showCategory($id) {
    //     $category = DB::select("select * from category where category_id = ? ", [$id]);
    //     if ($category) {
    //         return $category;
    //     }
    //     return 'Not found category';
    // }

    // public function showUserPassword($id) {
    //     $user = DB::select("select * from users where user_id = ? ", [$id]);
    //     if ($user) {
    //         return $user;
    //     }
    //     return 'Not found user manager';
    // }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        //echo "new title: ";
        //echo $request->input('title');

        DB::update("update book set title = ? where book_id = ?", [$request->input('title'), $id]);
        DB::update("update book set book_id = ? where book_id = ?", [$request->input('book_id'), $id]);
        DB::update("update book set author = ? where book_id = ?", [$request->input('author'), $id]);
        DB::update("update book set cid = ? where book_id = ?", [$request->input('cid'), $id]);
        DB::update("update book set publisher = ? where book_id = ?", [$request->input('publisher'), $id]);
        DB::update("update book set input_date = ? where book_id = ?", [$request->input('input_date'), $id]);
        DB::update("update book set quantity = ? where book_id = ?", [$request->input('quantity'), $id]);
        DB::update("update book set cost_price = ? where book_id = ?", [$request->input('cost_price'), $id]);
        DB::update("update book set selling_price = ? where book_id = ?", [$request->input('selling_price'), $id]);
        DB::update("update book set page_number = ? where book_id = ?", [$request->input('page_number'), $id]);
        DB::update("update book set sale = ? where book_id = ?", [$request->input('sale'), $id]);
        DB::update("update book set publish_date = ? where book_id = ?", [$request->input('publish_date'), $id]);
        DB::update("update book set language = ? where book_id = ?", [$request->input('language'), $id]);
        DB::update("update book set image = ? where book_id = ?", [$request->input('image'), $id]);
        DB::update("update book set description = ? where book_id = ?", [$request->input('description'), $id]);
        
    }

    public function updateUser(Request $request, $id)
    {
        //
        DB::update("update users set email = ? where user_id = ?", [$request->input('email'), $id]);
        //DB::update("update users set birthday = ? where id = ?", [$request->input('birthday'), $id]);
        DB::update("update users set phone = ? where user_id = ?", [$request->input('phone'), $id]);
        DB::update("update users set address = ? where user_id = ?", [$request->input('address'), $id]);

    }

    public function updateUserPassword(Request $request, $id)
    {
        //
        DB::update("update users set password = ? where user_id = ?", [$request->input('password'), $id]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $book = DB::select("select * from book where book_id = ?", [$id]);
        if ($book) {
            $deleted = DB::delete("delete from book where book_id = ?", [$id]);
        }
        return "Not found this book";
    }
}
