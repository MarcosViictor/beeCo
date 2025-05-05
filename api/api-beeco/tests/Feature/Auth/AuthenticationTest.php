<?php

namespace Tests\Feature\Auth;

use App\Models\Users;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    use RefreshDatabase;

    public function test_users_can_authenticate_using_the_login_screen(): void
    {
        $user = Users::factory()->create();

        $response = $this->post('/login', [
            'email' => $user->email,
            'senha' => 'senha',
        ]);

        $this->assertAuthenticated();
        $response->assertNoContent();
    }

    public function test_users_can_not_authenticate_with_invalid_password(): void
    {
        $user = Users::factory()->create();

        $this->post('/login', [
            'email' => $user->email,
            'senha' => 'senha-errada',
        ]);

        $this->assertGuest();
    }

    public function test_users_can_logout(): void
    {
        $user = Users::factory()->create();

        $response = $this->actingAs($user)->post('/logout');

        $this->assertGuest();
        $response->assertNoContent();
    }
}
