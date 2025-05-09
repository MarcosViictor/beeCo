<?php


namespace App\Http\Controllers;

use App\Models\Favoritos;
use App\Models\Users;
use Illuminate\Http\Request;

class FavoritoController extends Controller
{
    // Listar favoritos do contratante logado
    public function index(Request $request)
    {
        if ($request->user()->tipo !== 'contratante') {
            return response()->json(['error' => 'Apenas contratantes podem listar favoritos.'], 403);
        }

        $favoritos = Favoritos::where('id_contratante', $request->user()->id)
            ->with('prestador') 
            ->get();

        return response()->json($favoritos);
    }

    // Adicionar prestador aos favoritos
    public function store(Request $request)
    {
        $request->validate([
            'id_prestador' => 'required|exists:users,id',
        ]);

        if ($request->user()->tipo !== 'contratante') {
            return response()->json(['error' => 'Apenas contratantes podem favoritar.'], 403);
        }

        $prestador = Users::where('id', $request->id_prestador)
            ->where('tipo', 'prestador')
            ->firstOrFail();

        $favorito = Favoritos::firstOrCreate([
            'id_contratante' => $request->user()->id,
            'id_prestador' => $prestador->id,
        ]);

        return response()->json($favorito, 201);
    }

    // Remover prestador dos favoritos
    public function destroy(Request $request, $prestador_id)
    {
        if ($request->user()->tipo !== 'contratante') {
            return response()->json(['error' => 'Apenas contratantes podem remover favoritos.'], 403);
        }

        $favorito = Favoritos::where('id_contratante', $request->user()->id)
            ->where('id_prestador', $prestador_id)
            ->firstOrFail();

        $favorito->delete();

        return response()->json(['message' => 'Favorito removido com sucesso']);
    }
}
