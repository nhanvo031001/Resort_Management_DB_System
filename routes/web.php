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

Route::post('/admin/logout', 'ResortController@logout');
Route::get('/api/thongke', 'ResortController@statistic');
Route::get('/api/chi_nhanh', 'ResortController@getBranchesCode');
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


// Route::post('/admin/login', 'ResortController@login');



Route::get('', 'HomePageController@index');
Route::get('/detail/{id}', 'DetailController@index');
Route::get('/category/{type}', 'CategoryController@index');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');



// admin page
Route::get('/{any}', function () {
    return view('admin');
})->where('any', '.*');


Route::post('store_file', 'BookShopController@fileStore'); 



