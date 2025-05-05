<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Users;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): Response
    {
        $request->validate([
            'nome' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . Users::class],
            'senha' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = Users::create([
            'nome' => $request->nome,
            'email' => $request->email,
            'senha' => Hash::make($request->string('senha')),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return response()->noContent();
    }
}
