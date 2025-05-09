<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class IsContratante
{
    
        public function handle(Request $request, Closure $next)
        {
            if ($request->user() && $request->user()->tipo === 'contratante') {
                return $next($request);
            }
    
            return response()->json(['message' => 'Acesso não autorizado. Apenas contratantes.'], 403);
        }

}
