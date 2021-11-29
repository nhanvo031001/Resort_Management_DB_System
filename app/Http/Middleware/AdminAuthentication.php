<?php

namespace App\Http\Middleware;

use Closure;

use Illuminate\Support\Facades\DB;          //myself
use Illuminate\Support\Facades\Config;

class AdminAuthentication
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // if (!$request->session()->has('data')) {
        //     $username = $request->input('username');
        //     $password = $request->input('password');
        //     Config::set('database.connections.mysql.database', 'resort');
        //     Config::set('database.connections.mysql.username', $username);
        //     Config::set('database.connections.mysql.password', $password);
        //     try {
        //         DB::connection()->getPdo();
        //         $request->session()->put('data', $request->input());
        //     }
        //     catch (\Exception $e) {
        //         // die("Could not connect to the database.  Please check your configuration. error:" . $e );
        //         return redirect('/');
        //     }
        // }
        // $username = $request->session()->get('data')['username'];
        // $password  = $request->session()->get('data')['password'];
        // print_r($username);



        $username = null;
        $password = null;
        $hasSession = True;
        if (!$request->session()->has('data')) {
            $hasSession = False;
            $username = $request->input('username');
            $password = $request->input('password');
            
        }
        else {
            $username = $request->session()->get('data')['username'];
            $password  = $request->session()->get('data')['password'];
        }
        Config::set('database.connections.mysql.database', 'resort');
        Config::set('database.connections.mysql.username', $username);
        Config::set('database.connections.mysql.password', $password);
        try {
            DB::connection()->getPdo();
            if(!$hasSession) $request->session()->put('data', $request->input());
        }
        catch (\Exception $e) {
            // die("Could not connect to the database.  Please check your configuration. error:" . $e );
            return redirect('/');
        }
        return $next($request);
    }
}
