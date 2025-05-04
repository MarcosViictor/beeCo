<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    
    public function index(Request $request)
    {
        $tipo = $request->query('tipo'); 
        $query = Post::with('user'); 

        if ($tipo) {
            $query->where('tipo_postagem', $tipo); 
        }

        return response()->json($query->latest()->get());
    }

    public function store(Request $request)
    {
        $request->validate([
            'titulo' => 'required|string|max:255',
            'descricao' => 'required|string',
            'tipo_postagem' => 'required|in:contratante,prestador',
            'preco' => 'nullable|numeric',
            'categoria' => 'nullable|string',
            'imagem' => 'nullable|string', // Modificado para aceitar string em vez de arquivo
        ]);

        // Cria um novo post com os dados do request
        $post = Post::create([
            'user_id' => Auth::id(), 
            'titulo' => $request->titulo,
            'descricao' => $request->descricao,
            'tipo_postagem' => $request->tipo_postagem,
            'preco' => $request->preco,
            'categoria' => $request->categoria,
            'imagem' => $request->imagem, // Usa diretamente o valor da string
        ]);

        return response()->json($post, 201);
    }

    public function show($id)
    {
        $post = Post::with('user')->findOrFail($id); 

        return response()->json($post);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'titulo' => 'required|string|max:255',
            'descricao' => 'required|string',
            'tipo_postagem' => 'required|in:contratante,prestador',
            'preco' => 'nullable|numeric',
            'categoria' => 'nullable|string',
            'imagem' => 'nullable|string', // Modificado para aceitar string em vez de arquivo
        ]);

        $post = Post::findOrFail($id); 

        // Verifica se o usuário autenticado é o dono do post
        if ($post->user_id !== Auth::id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        // Atualiza o post com os dados do request
        $post->update([
            'titulo' => $request->titulo,
            'descricao' => $request->descricao,
            'tipo_postagem' => $request->tipo_postagem,
            'preco' => $request->preco,
            'categoria' => $request->categoria,
            'imagem' => $request->imagem, // Usa diretamente o valor da string
        ]);

        return response()->json($post);
    }

    public function destroy($id)
    {
        $post = Post::findOrFail($id); 

        // Verifica se o usuário autenticado é o dono do post
        if ($post->user_id !== Auth::id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        
        $post->delete();

        return response()->json(['message' => 'Postagem deletada com sucesso']);
    }
}