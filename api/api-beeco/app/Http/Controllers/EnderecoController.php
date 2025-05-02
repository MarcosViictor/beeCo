<?php

namespace App\Http\Controllers;

use App\Models\Endereco;
use Illuminate\Http\Request;

class EnderecoController extends Controller
{
    public function index()
    {
        return Endereco::all();
    }

    public function store(Request $request)
    {
        $endereco = Endereco::create($request->all());
        return response()->json($endereco, 201);
    }

    public function show($id)
    {
        return Endereco::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $endereco = Endereco::findOrFail($id);
        $endereco->update($request->all());
        return response()->json($endereco, 200);
    }

    public function destroy($id)
    {
        Endereco::destroy($id);
        return response()->json(null, 204);
    }
}

