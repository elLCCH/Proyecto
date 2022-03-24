<?php

namespace App\Http\Controllers;

use App\Models\Administrativos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdministrativosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $administrativo =  DB::select("select * from administrativos order by Ap_Paterno, Ap_Materno, Nombre");
        return $administrativo;
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Administrativos  $administrativos
     * @return \Illuminate\Http\Response
     */
    public function show(Administrativos $administrativos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Administrativos  $administrativos
     * @return \Illuminate\Http\Response
     */
    public function edit(Administrativos $administrativos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Administrativos  $administrativos
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Administrativos $administrativos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Administrativos  $administrativos
     * @return \Illuminate\Http\Response
     */
    public function destroy(Administrativos $administrativos)
    {
        //
    }
}
