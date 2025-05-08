<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\EnderecoController;

// Autenticação
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Protegidas por JWT
Route::middleware('auth:api')->group(function () {
    // Perfil do usuário
    Route::get('/me', [AuthController::class, 'me']);

    // Usuário
    Route::get('/user', [UserController::class, 'show']);
    Route::put('/user', [UserController::class, 'update']);
    Route::delete('/user', [UserController::class, 'destroy']);

    // Posts
    Route::get('/posts', [PostController::class, 'index']);
    Route::post('/posts', [PostController::class, 'store']);
    Route::get('/posts/{id}', [PostController::class, 'show']);
    Route::put('/posts/{id}', [PostController::class, 'update']);
    Route::delete('/posts/{id}', [PostController::class, 'destroy']);

    // Endereços
    Route::get('/enderecos', [EnderecoController::class, 'index']);
    Route::post('/enderecos', [EnderecoController::class, 'store']);
    Route::get('/enderecos/{id}', [EnderecoController::class, 'show']);
    Route::put('/enderecos/{id}', [EnderecoController::class, 'update']);
    Route::delete('/enderecos/{id}', [EnderecoController::class, 'destroy']);
});
