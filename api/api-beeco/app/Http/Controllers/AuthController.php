<?php

namespace App\Http\Controllers;

use App\Models\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {
            $validated = $request->validate([
                'nome' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users,email',
                'senha' => 'required|string|min:8|confirmed',
                'tipo' => 'required|in:contratante,prestador',
                'data_nascimento' => 'nullable|date',
                'sexo' => 'nullable|in:M,F,O',
                'foto_perfil' => 'nullable|string',
                'telefone' => 'nullable|string',
                'id_endereco' => 'nullable|exists:endereco,id_endereco',
            ]);

            // Hash da senha antes de criar
            $validated['senha'] = Hash::make($validated['senha']);

            $user = Users::create($validated);

            $token = JWTAuth::fromUser($user);

            return response()->json([
                'message' => 'Usuário registrado com sucesso',
                'user' => $user,
                'token' => $token,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Erro ao registrar usuário',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function login(Request $request)
    {
        try {
            $credentials = $request->validate([
                'email' => 'required|email',
                'senha' => 'required|string',
            ]);

            // Encontrar o usuário pelo email
            $user = Users::where('email', $credentials['email'])->first();

            if (!$user || !Hash::check($credentials['senha'], $user->senha)) {
                return response()->json([
                    'message' => 'Credenciais inválidas',
                    'debug' => 'Usuário não encontrado ou senha incorreta',
                ], 401);
            }

            // Se as credenciais estiverem corretas, gerar o token manualmente
            $token = JWTAuth::fromUser($user);

            return response()->json([
                'message' => 'Login bem-sucedido',
                'user' => $user,
                'token' => $token,
            ]);
        } catch (JWTException $e) {
            return response()->json([
                'message' => 'Erro ao gerar token',
                'error' => $e->getMessage(),
            ], 500);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Erro no servidor',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function me(Request $request)
    {
        try {
            $user = auth()->user();

            if (!$user) {
                return response()->json([
                    'message' => 'Usuário não autenticado',
                ], 401);
            }

            return response()->json([
                'message' => 'Usuário autenticado',
                'user' => $user,
            ]);
        } catch (JWTException $e) {
            return response()->json([
                'message' => 'Erro ao verificar autenticação',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}