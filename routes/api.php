<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AvaliacaoController;

Route::apiResource('avaliacoes', AvaliacaoController::class);
