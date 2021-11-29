<?php

use Illuminate\Support\Facades\Route;


// use App\Http\Controllers\HomePageController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('homepage');
// });

Route::get('', 'HomePageController@index');

Route::post('/admin/logout', 'ResortController@logout');
Route::get('/api/thongke', 'ResortController@statistic')->middleware('admin.auth');
Route::get('/api/chi_nhanh', 'ResortController@getBranchesCode')->middleware('admin.auth');
Route::get('/admin/', function () {
    return view('admin');
})->middleware('admin.auth');
Route::post('/admin/', function () {
    return view('admin');
})->middleware('admin.auth');
Route::get('/admin/{any}', function () {
    return view('admin');
})->where('any', '.*')->middleware('admin.auth');
Route::post('/admin/{any}', function () {
    return view('admin');
})->where('any', '.*')->middleware('admin.auth');

Route::get('/api/loaiPhongAll', 'ResortController@index')->middleware('admin.auth');  // lấy tất cả loại phòng         // done proc
Route::get('/api/loaiPhong/{id}', 'ResortController@show')->middleware('admin.auth');            // tìm loại phòng theo ID     // done proc
Route::post('/api/loaiPhong', 'ResortController@store')->middleware('admin.auth');     // thêm loại phòng
//Route::delete('loaiPhong/{id}', 'ResortController@destroy');  // xóa loại phòng


Route::get('/api/khachHangAll', 'ResortController@indexKhachHang')->middleware('admin.auth');  // lấy tất cả khách hàng        // done proc
Route::get('/api/khachHang/{id}', 'ResortController@showKhachHang')->middleware('admin.auth');   // lấy khách hàng theo id     // done proc
Route::get('/api/maDatPhong/{id}', 'ResortController@showMaDatPhong')->middleware('admin.auth');   // lấy mã đặt phòng theo ID khách hàng      // done proc

Route::get('/api/vatTuAll', 'ResortController@indexVatTu')->middleware('admin.auth');      // lấy all vật tư       // done proc


// Route::get('/detail/{id}', 'DetailController@index');
// Route::get('/category/{type}', 'CategoryController@index');


// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');

// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');



// // admin page
// Route::get('/{any}', function () {
//     return view('admin');
// })->where('any', '.*');


// Route::post('store_file', 'BookShopController@fileStore'); 
