<?php

use Illuminate\Http\Request;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:api')->get('/me', [AuthController::class, 'me']);
Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// Rota de teste para depuração
Route::get('/test-jwt-config', function () {
    return response()->json([
        'message' => 'Rota de teste para JWT',
        'auth_guards' => config('auth.guards'),
        'default_guard' => config('auth.defaults.guard'),
        'user_provider' => config('auth.providers.users')
    ]);
});

// Rota de teste para criar um usuário
Route::get('/test-create-user', function () {
    try {
        $user = \App\Models\Users::create([
            'nome' => 'Teste API',
            'email' => 'testeapi@example.com',
            'senha' => bcrypt('senha123'),
            'tipo' => 'contratante'
        ]);

        // Tentar gerar um token JWT
        $token = \Tymon\JWTAuth\Facades\JWTAuth::fromUser($user);

        return response()->json([
            'message' => 'Usuário de teste criado com sucesso',
            'user' => $user,
            'token' => $token
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'message' => 'Erro ao criar usuário de teste',
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ], 500);
    }
});




// Rotas protegidas por autenticação JWT
Route::middleware('auth:api')->group(function () {
    Route::get('/user', [UserController::class, 'show']); // Visualizar perfil
    Route::put('/user', [UserController::class, 'update']); // Atualizar perfil
    Route::delete('/user', [UserController::class, 'destroy']); // Excluir conta
});

//Route::middleware((['auth:sanctum']))->group(function () {
    Route::get('/enderecos', [\App\Http\Controllers\EnderecoController::class, 'index']);
    Route::post('/enderecos', [\App\Http\Controllers\EnderecoController::class, 'store']);
    Route::get('/enderecos/{id}', [\App\Http\Controllers\EnderecoController::class, 'show']);
    Route::put('/enderecos/{id}', [\App\Http\Controllers\EnderecoController::class, 'update']);
    Route::delete('/enderecos/{id}', [\App\Http\Controllers\EnderecoController::class, 'destroy']);
//});

Route::middleware('auth:api')->group(function () {
    Route::get('/favoritos', [\App\Http\Controllers\FavoritoController::class, 'index']);
    Route::post('/favoritos', [\App\Http\Controllers\FavoritoController::class, 'store']);
    Route::delete('/favoritos/{prestador_id}', [\App\Http\Controllers\FavoritoController::class, 'destroy']);
});







