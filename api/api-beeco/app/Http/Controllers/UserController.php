<?php

namespace App\Http\Controllers;

use App\Models\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Routing\Controller; // Import necessário para Controller

class UserController extends Controller
{


    /**
     * Read: Obter dados do usuário logado
     */
    public function show(Request $request)
    {
        try {
            $user = auth()->user();

            return response()->json([
                'message' => 'Dados do usuário recuperados com sucesso',
                'user' => $user,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Erro ao recuperar dados do usuário',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Update: Atualizar dados do usuário logado
     */
    public function update(Request $request)
    {
        try {
            $user = auth()->user();

            $validated = $request->validate([
                'nome' => 'sometimes|string|max:255',
                'email' => 'sometimes|string|email|max:255|unique:users,email,' . $user->id . ',id',
                'senha' => 'sometimes|string|min:8|confirmed',
                'tipo' => 'sometimes|in:contratante,prestador',
                'data_nascimento' => 'nullable|date',
                'sexo' => 'nullable|in:M,F,O',
                'foto_perfil' => 'nullable|string',
                'telefone' => 'nullable|string',
                'id_endereco' => 'nullable|exists:endereco,id_endereco',
            ]);

            // Hash da senha, se fornecida
            if (isset($validated['senha'])) {
                $validated['senha'] = Hash::make($validated['senha']);
            }

            $user->update($validated);

            return response()->json([
                'message' => 'Usuário atualizado com sucesso',
                'user' => $user,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Erro ao atualizar usuário',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Delete: Excluir conta do usuário logado
     */
    public function destroy(Request $request)
    {
        try {
            $user = auth()->user();

            // Invalidar o token JWT
            JWTAuth::invalidate(JWTAuth::getToken());

            // Excluir o usuário
            $user->delete();

            return response()->json([
                'message' => 'Conta excluída com sucesso',
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Erro ao excluir conta',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}