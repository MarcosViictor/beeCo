<?php

namespace App\Http\Controllers;

use App\Models\Avaliacao;
use Illuminate\Http\Request;

class AvaliacaoController extends Controller
{
    public function index()
    {
        $avaliacoes = Avaliacao::all();
        return response()->json($avaliacoes);
    }

    public function show($id)
    {
        $avaliacao = Avaliacao::find($id);
        
        if (!$avaliacao) {
            return response()->json(['message' => 'Avaliação não encontrada'], 404);
        }

        return response()->json($avaliacao);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nome' => 'required|string|max:255',
            'url' => 'required|url',
            'avaliacao' => 'required|integer|min:1|max:5',
        ]);

        $avaliacao = Avaliacao::create([
            'nome' => $request->nome,
            'url' => $request->url,
            'avaliacao' => $request->avaliacao,
        ]);

        return response()->json($avaliacao, 201);
    }

    public function update(Request $request, $id)
    {
        $avaliacao = Avaliacao::find($id);

        if (!$avaliacao) {
            return response()->json(['message' => 'Avaliação não encontrada'], 404);
        }

        $request->validate([
            'nome' => 'string|max:255',
            'url' => 'url',
            'avaliacao' => 'integer|min:1|max:5',
        ]);

        $avaliacao->update($request->all());

        return response()->json($avaliacao);
    }

    public function destroy($id)
    {
        $avaliacao = Avaliacao::find($id);

        if (!$avaliacao) {
            return response()->json(['message' => 'Avaliação não encontrada'], 404);
        }

        $avaliacao->delete();
        return response()->json(['message' => 'Avaliação excluída com sucesso']);
    }
}