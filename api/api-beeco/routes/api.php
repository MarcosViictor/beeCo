<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware((['auth:sanctum']))->group(function () {
    Route::get('/enderecos', [\App\Http\Controllers\EnderecoController::class, 'index']);
    Route::post('/enderecos', [\App\Http\Controllers\EnderecoController::class, 'store']);
    Route::get('/enderecos/{id}', [\App\Http\Controllers\EnderecoController::class, 'show']);
    Route::put('/enderecos/{id}', [\App\Http\Controllers\EnderecoController::class, 'update']);
    Route::delete('/enderecos/{id}', [\App\Http\Controllers\EnderecoController::class, 'destroy']);
});