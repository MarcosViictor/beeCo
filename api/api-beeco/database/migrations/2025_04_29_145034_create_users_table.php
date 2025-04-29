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
        Schema::create('users', function (Blueprint $table) {
            $table->id('id_usuario');
            $table->string('nome');
            $table->string('email')->unique();
            $table->string('senha');
            $table->date('data_nascimento')->nullable();
            $table->enum('sexo', ['M', 'F', 'O'])->nullable();
            $table->enum('tipo', ['contratante', 'prestador']);
            $table->string('foto_perfil')->nullable();
            $table->string('telefone')->nullable();
            $table->foreignId('id_endereco')->nullable()->constrained('enderecos', 'id_endereco');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};

