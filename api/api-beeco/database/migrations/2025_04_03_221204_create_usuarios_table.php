<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id('id_usuarios');
            $table -> string('nome');
            $table -> string('email');
            $table -> timestamp('email_verified_at')->nullable();
            $table -> string('password', 255);
            $table -> date('data_nascimento')-> nullable(); 
            $table -> enum('sexo', ['M','m', 'F','f', 'o', 'O']) -> nullable();
            $table -> string('foto_perfil') -> nullable();
            $table -> string('telefone') -> nullable();
            $table -> foreignId('id_endereco') -> nullable() -> constrained('edereco');
            $table -> rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
