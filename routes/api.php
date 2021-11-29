<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {   
    return $request->user();
});





// // admin page
// Route::post('book', 'BookShopController@store');               // create new book
// Route::get('books', 'BookShopController@index');               // get all books
// Route::delete('book/{id}', 'BookShopController@destroy');      // delete book
// Route::get('book/{id}', 'BookShopController@show');            // find book by id
// Route::put('book/{id}', 'BookShopController@update');          // update


// Route::get('users', 'BookShopController@indexUser');          // get user information
// //Route::get('user/{id}', 'BookShopController@showUser');   // show information when editing profile
// Route::get('getUser', 'BookShopController@showUser');   // show information when editing profile
// Route::put('user/{id}', 'BookShopController@updateUser');   // update information
// Route::put('user/password/{id}', 'BookShopController@updateUserPassword');  // update password

// Route::get('categories', 'BookShopController@indexCategories');               // get all categories
// // Route::get('category/{id}', 'BookShopController@showCategory');  


// Route::post('store_file', 'BookShopController@fileStore'); 



// DBMS
Route::get('loaiPhongAll', 'ResortController@index');  // lấy tất cả loại phòng         // done proc
Route::get('loaiPhong/{id}', 'ResortController@show');            // tìm loại phòng theo ID     // done proc
Route::post('loaiPhong', 'ResortController@store');     // thêm loại phòng
//Route::delete('loaiPhong/{id}', 'ResortController@destroy');  // xóa loại phòng


Route::get('khachHangAll', 'ResortController@indexKhachHang');  // lấy tất cả khách hàng        // done proc
Route::get('khachHang/{id}', 'ResortController@showKhachHang');   // lấy khách hàng theo id     // done proc
Route::get('maDatPhong/{id}', 'ResortController@showMaDatPhong');   // lấy mã đặt phòng theo ID khách hàng      // done proc

Route::get('vatTuAll', 'ResortController@indexVatTu');      // lấy all vật tư       // done proc