<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use App\BookShop;

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
        return DB::select("select * from loai_phong order by ma_loai_phong asc");

    }

    public function indexKhachHang()
    {
        return DB::select("select * from khach_hang order by ma_khach_hang asc");

    }

    public function show($id)
    {

        $loaiPhong = DB::select("select * from loai_phong where ma_loai_phong = ?", [$id]);
        if ($loaiPhong) {
            return $loaiPhong;
        }
        return 'Khong tim thay loai phong';

    }

    public function showKhachHang($id)
    {

        $khachHang = DB::select("select * from khach_hang where ma_khach_hang = ?", [$id]);
        if ($khachHang) {
            return $khachHang;
        }
        return 'Khong tim thay khach hang';

    }

    public function showMaDatPhong($id)
    {
        
        $donDatPhong = DB::select("select * from don_dat_phong where ma_khach_hang = ?", [$id]);
        if ($donDatPhong) {
            return $donDatPhong;
        }
        return 'Khong tim thay ma dat phong';

    }

    public function store(Request $request)
    {
        
        $request->input('array');

        $book = DB::insert("insert into loai_phong (ma_loai_phong, ten_loai_phong, dien_tich, so_khach, mo_ta_khac)
        values (?, ?, ?, ?, ?)",
        [$request->input('ma_loai_phong'), $request->input('ten_loai_phong'), $request->input('dien_tich'), $request->input('so_khach'),
        $request->input('mo_ta_khac')]);

        // lấy id cuối cùng

        // duyệt array, insert từng object vô 
    }

    public function destroy($id)
    {
  
        $loaiPhong = DB::select("select * from loai_phong where ma_loai_phong = ?", [$id]);
        if ($loaiPhong) {
            $deleted = DB::delete("delete from loai_phong where ma_loai_phong = ?", [$id]);
        }
        return "Không tìm thấy loại phòng";
    }


}
