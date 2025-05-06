<?php

namespace App\Http\Controllers;

use App\Models\Favoritos;
use Illuminate\Http\Request;

class FavoritoController extends Controller
{
    public function index(Request $request)
    {
        // Retorna os prestadores favoritos do contratante autenticado
        return Favoritos::where('id_contratante', $request->user()->id)
            ->with('prestador')
            ->get();
    }

    public function store(Request $request)
    {
        // Adiciona um prestador aos favoritos
        $request->validate([
            'id_prestador' => 'required|exists:users,id',
        ]);

        $favorito = Favoritos::create([
            'id_contratante' => $request->user()->id,
            'id_prestador' => $request->id_prestador,
        ]);

        return response()->json($favorito, 201);
    }

    public function destroy(Request $request, $id)
    {
        // Remove um prestador dos favoritos
        $favorito = Favoritos::where('id_contratante', $request->user()->id)
            ->where('id_favorito', $id)
            ->firstOrFail();
        $favorito->delete();

        return response()->json(['message' => 'Favorito removido com sucesso']);
    }
}