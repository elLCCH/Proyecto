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
        // hola carlitos
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
        // if($request->hasFile('Foto')){
        //     $file = $request->file('Foto');
        //     $namefile = time().$file->getClientOriginalName();
        //     $file->move(public_path().'/administrativos/',$namefile);
        // }
        // Ap_Paterno'
        // Ap_Materno'
        // Nombre',thi
        // Sexo',this.
        // FechNac',th
        // CI',this.ne
        // Password',t
        // Tipo',this.
        // Estado',thi

        
        $administrativo = new Administrativos();
        // if($request->hasFile('Foto')){$administrativo->Foto = 'Administrativos/'.$namefile;}
        // else{$administrativo->Foto = '';}
        $administrativo->Ap_Paterno = $request->input('Ap_Paterno');
        $administrativo->Ap_Materno= $request->input('Ap_Materno');
        $administrativo->Nombre= $request->input('Nombre');
        $administrativo->Sexo= $request->input('Sexo');
        $administrativo->FechNac= $request->input('FechNac');
        $administrativo->CI= $request->input('CI');
        $administrativo->Tipo= $request->input('Tipo');
        $administrativo->Password= $request->input('Password');
        $administrativo->Estado= $request->input('Estado');
        $administrativo->save();
        return 'administrativo Guardado';
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
    public function actualizarAdministrativo(Request $request, $id)
    {
        $Nom = $request->Ap_Paterno;
        $requestData = $request->all();
        // $administrativo =Administrativos::findOrFail($id);
        // if ($request->hasFile('Foto')) 
        // {
        //     // ELIMINANDO ANTIGUA FOTO
            
        //     File::delete(public_path().'/'.$administrativo->Foto);
        //     //REALIZANDO CARGA DE LA NUEVA FOTO
        //     $file = $request->file('Foto');
        //     $namefile = time().$file->getClientOriginalName();
        //     $file->move(public_path().'/administrativos/',$namefile);
            
        //     // return 'paso';
        // }
        // // $requestData['Foto'] = 'Administrativos/'.$namefile;
        
        // if ($request->hasFile('Foto')) 
        // {//SI TIENE FOTO ENTONCES EN Foto poner sus cosas
        //     $requestData['Foto'] = 'administrativos/'.$namefile;
        // }
        // else
        // {//SINO TIENE FOTO Y AUN ASI QUIERE ACTUALIZAR
        //     $requestData['Foto'] = $administrativo->Foto;
        // }
        Administrativos::where('id','=',$id)->update($requestData);
        return 'Datos administrativo Modificados';
        // return $request;
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Administrativos  $administrativos
     * @return \Illuminate\Http\Response
     */
    public function destroy($asd)
    {
        Administrativos::destroy($asd);
    }
}
