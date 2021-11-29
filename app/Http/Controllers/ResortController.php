<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Resort;

use Illuminate\Support\Facades\DB;          //myself

class ResortController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //return DB::select("select * from loai_phong order by ma_loai_phong asc");

        $obj = new Resort();
        return $obj->index();
    }

    public function indexKhachHang()
    {
        
        
        //return DB::select("select * from khach_hang order by ma_khach_hang asc");

        
        // gọi từ model, để model gọi từ DB
        $obj = new Resort();
        return $obj->indexKhachHang();
    }

    public function indexVatTu()
    {
        //return DB::select("select * from loai_vat_tu order by ma_loai_vat_tu asc");

        $obj = new Resort();
        return $obj->indexVatTu();
    }

    public function show($id)
    {

        // $loaiPhong = DB::select("select * from loai_phong where ma_loai_phong = ?", [$id]);
        // if ($loaiPhong) {
        //     return $loaiPhong;
        // }
        // return 'Khong tim thay loai phong';

        $obj = new Resort();
        return $obj->show($id);
    }

    public function showKhachHang($id)
    {

        // $khachHang = DB::select("select * from khach_hang where ma_khach_hang = ?", [$id]);
        // if ($khachHang) {
        //     return $khachHang;
        // }
        // return 'Khong tim thay khach hang';
        

        // gọi từ model
        $obj = new Resort();
        return $obj->showKhachHang($id);
    }

    public function showMaDatPhong($id)
    {
        
        // $donDatPhong = DB::select("select * from don_dat_phong where ma_khach_hang = ?", [$id]);
        // if ($donDatPhong) {
        //     return $donDatPhong;
        // }
        // return 'Khong tim thay ma dat phong';

        // gọi từ model
        $obj = new Resort();
        return $obj->showMaDatPhong($id);
    }

    public function store(Request $request)
    {
        
        //echo ("nhanvo");
        //print_r($request->input('vatTu'));
        // echo $request->input('vatTu.0.ma_loai_vat_tu');
        // foreach ($request->input('vatTu') as &$item) {
        //     //do nothing.
        //     echo ($item['ma_loai_vat_tu'][0]);
        // }




        // foreach($request->input('vatTu') as $i => $i_value) {
        //     echo $i_value->ma_loai_vat_tu[0];
        // }

        //$i = 0;
        // echo ($request->input('vatTu.{$i}.ma_loai_vat_tu'));
        // cái này ok 
        //echo ($request->input('vatTu')[$i]['ma_loai_vat_tu']); 


        // for ($i = 0; $i < count($request->input('vatTu')); $i++) {
        //     //echo $request->input('vatTu[$i]');  
        //     echo ($request->input('vatTu')[$i]['ma_loai_vat_tu']);
        //     echo ($request->input('vatTu')[$i]['ten_loai_vat_tu']);
        //     echo ($request->input('vatTu')[$i]['so_luong']);
        //     DB::insert("insert into loai_vat_tu_trong_loai_phong (ma_loai_vat_tu, ma_loai_phong, so_luong) values (?, ?, ?)", [$request->input('vatTu')[$i]['ma_loai_vat_tu']
        //     , 1, $request->input('vatTu')[$i]['so_luong']]);
        // }



        // $loai_phong = DB::insert("insert into loai_phong (ma_loai_phong, ten_loai_phong, dien_tich, so_khach, mo_ta_khac)
        // values (?, ?, ?, ?, ?)",
        // [$request->input('ma_loai_phong'), $request->input('ten_loai_phong'), $request->input('dien_tich'), $request->input('so_khach'),
        // $request->input('mo_ta_khac')]);


        // $loai_phong = DB::insert("insert into loai_phong (ten_loai_phong, dien_tich, so_khach, mo_ta_khac)
        // values (?, ?, ?, ?)",
        // [$request->input('ten_loai_phong'), $request->input('dien_tich'), $request->input('so_khach'),
        // $request->input('mo_ta_khac')]);







        // // lấy id cuối cùng
        // $lastInsertedID = DB::table('loai_phong')
        //              ->insertGetId( array(
        //                            'ten_loai_phong' => $request->input('ten_loai_phong'),
        //                            'dien_tich' => $request->input('dien_tich'),
        //                            'so_khach' => $request->input('so_khach'),
        //                            'mo_ta_khac' => $request->input('mo_ta_khac'),
        //                        )
        //              )
        //             ;
        // echo $lastInsertedID;

        // for ($i = 0; $i < count($request->input('vatTu')); $i++) {
        //     //echo $request->input('vatTu[$i]');  
        //     // echo ($request->input('vatTu')[$i]['ma_loai_vat_tu']);
        //     // echo ($request->input('vatTu')[$i]['ten_loai_vat_tu']);
        //     // echo ($request->input('vatTu')[$i]['so_luong']);
        //     DB::insert("insert into loai_vat_tu_trong_loai_phong (ma_loai_vat_tu, ma_loai_phong , so_luong) values (?, ?, ?)", [$request->input('vatTu')[$i]['ma_loai_vat_tu']
        //     , $lastInsertedID , $request->input('vatTu')[$i]['so_luong']]);
           
        // }

        // for ($i = 0; $i < count($request->input('giuong')); $i++) {
        //     DB::insert("insert into thong_tin_giuong (ma_loai_phong, kich_thuoc , so_luong) values (?, ?, ?)", [
        //         $lastInsertedID, $request->input('giuong')[$i]['kichThuoc'], $request->input('giuong')[$i]['soLuong']]);
        // }

        


        // gọi từ DB
        $obj = new Resort();
        $obj->store($request);
    }

    // public function destroy($id)
    // {
  
    //     // $loaiPhong = DB::select("select * from loai_phong where ma_loai_phong = ?", [$id]);
    //     // if ($loaiPhong) {
    //     //     $deleted = DB::delete("delete from loai_phong where ma_loai_phong = ?", [$id]);
    //     // }
    //     // return "Không tìm thấy loại phòng";

    //     $obj = new Resort();
    //     return $obj->destroy($id);
    // }






    public function getBranchesCode() {
        $obj = new Resort();
        return $obj->indexChiNhanh();
    }

    public function statistic(Request $request) {
        $branch = "'".$request->input('branch')."'";
        $year = $request->input('year');
        $obj = new Resort();
        return $obj->statisticCustomer($branch, $year);
    }

    // public function login(Request $request) {
    //     if (!$request->session()->has('data')) {
    //         $username = $request->input('username');
    //         $password = $request->input('password');
    //         Config::set('database.connections.mysql.database', 'resort');
    //         Config::set('database.connections.mysql.username', $username);
    //         Config::set('database.connections.mysql.password', $password);
    //         try {
    //             DB::connection()->getPdo();
    //             $request->session()->put('data', $request->input());
    //             return redirect('/admin');
    //         }
    //         catch (\Exception $e) {
    //             // die("Could not connect to the database.  Please check your configuration. error:" . $e );
    //             return redirect('/');
    //         }
    //     }
    //     else return redirect('/admin');
    // }

    public function logout(Request $request) {

        $request->session()->forget('data');
        return redirect('/');
    }
}
