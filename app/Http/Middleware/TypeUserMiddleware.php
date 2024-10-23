<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TypeUserMiddleware
{
    public function handle(Request $request, Closure $next, $type): Response
    {
        if (!$request->user() || !$request->user()->checkType($type)){
            abort(403, 'Acceso Denegado');
        }
        return $next($request);
    }
}
