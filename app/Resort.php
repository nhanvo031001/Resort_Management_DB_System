<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;    



class Resort extends Model
{
    //
    // protected $fillable = [
    // 	'title', 'id', 'author', 'publisher', 'input_date', 'quantity', 'cost_price', 'selling_price', 'page_number', 'sale', 'publish_date',
    //     'language', 'picture', 'description'
    // ];

    protected $fillable = [
    	'title', 'id'
    ];


    public function indexKhachHang()
    {
        //return DB::select("select * from khach_hang order by ma_khach_hang asc");

        // gọi procedure từ DB
        return DB::select("call indexKhachHang");  
    }

    public function showKhachHang($id)
    {
        // $khachHang = DB::select("select * from khach_hang where ma_khach_hang = ?", [$id]);
        // if ($khachHang) {
        //     return $khachHang;
        // }
        // return 'Khong tim thay khach hang';

        // gọi procedure từ DB
        return DB::select("call showKhachHang(?)", array("$id"));
    }


    public function showMaDatPhong($id)
    {
        
        // $donDatPhong = DB::select("select * from don_dat_phong where ma_khach_hang = ?", [$id]);
        // if ($donDatPhong) {
        //     return $donDatPhong;
        // }
        // return 'Khong tim thay ma dat phong';

        // gọi từ model
        return DB::select("call showMaDatPhong(?)", array("$id"));
    }


    public function index()
    {
        //return DB::select("select * from loai_phong order by ma_loai_phong asc");

        return DB::select("call indexLoaiPhong");
        
    }

    public function show($id)
    {

        // $loaiPhong = DB::select("select * from loai_phong where ma_loai_phong = ?", [$id]);
        // if ($loaiPhong) {
        //     return $loaiPhong;
        // }
        // return 'Khong tim thay loai phong';

        return DB::select("call showLoaiPhong(?)", array("$id"));
    }


    // public function destroy($id)
    // {
  
    //     // $loaiPhong = DB::select("select * from loai_phong where ma_loai_phong = ?", [$id]);
    //     // if ($loaiPhong) {
    //     //     $deleted = DB::delete("delete from loai_phong where ma_loai_phong = ?", [$id]);
    //     // }
    //     // return "Không tìm thấy loại phòng";

    //     return DB::select("call deleteLoaiPhong(?)", array("$id"));
    // }



    public function indexVatTu()
    {
        //return DB::select("select * from loai_vat_tu order by ma_loai_vat_tu asc");

        return DB::select("call indexVatTu");
    }



    public function store($request)
    {
        

        // lấy id cuối cùng
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
        
        
        $insertID = DB::select("call insertLoaiPhong(?, ?, ?, ?)", array($request->input('ten_loai_phong'), $request->input('dien_tich')
        ,$request->input('so_khach'), $request->input('mo_ta_khac')));
        
        echo ($insertID[0]->lastID);
        $lastInsertedID = $insertID[0]->lastID;
        // $lastInsertedID = 0;
        // foreach($lastInsertedID as &$lastID) {
        //     echo $blog->lastID;
        // }
            
               

        // print_r($lastInsertedID);
        // echo ($lastInsertedID->first());


        for ($i = 0; $i < count($request->input('vatTu')); $i++) {
            //echo $request->input('vatTu[$i]');  
            // echo ($request->input('vatTu')[$i]['ma_loai_vat_tu']);
            // echo ($request->input('vatTu')[$i]['ten_loai_vat_tu']);
            // echo ($request->input('vatTu')[$i]['so_luong']);


            // DB::insert("insert into loai_vat_tu_trong_loai_phong (ma_loai_vat_tu, ma_loai_phong , so_luong) values (?, ?, ?)", [$request->input('vatTu')[$i]['ma_loai_vat_tu']
            // , $lastInsertedID , $request->input('vatTu')[$i]['so_luong']]);

            DB::select("call insertVatTu(?, ?, ?)", array($request->input('vatTu')[$i]['ma_loai_vat_tu']
            , $lastInsertedID , $request->input('vatTu')[$i]['so_luong']) );
           
        }

        for ($i = 0; $i < count($request->input('giuong')); $i++) {
            // DB::insert("insert into thong_tin_giuong (ma_loai_phong, kich_thuoc , so_luong) values (?, ?, ?)", [
            //     $lastInsertedID, $request->input('giuong')[$i]['kichThuoc'], $request->input('giuong')[$i]['soLuong']]);

            DB::select("call insertGiuong(?, ?, ?)", array($lastInsertedID, $request->input('giuong')[$i]['kichThuoc'], 
            $request->input('giuong')[$i]['soLuong']) );
        }

        // duyệt array, insert từng object vô 
    }

    
}
