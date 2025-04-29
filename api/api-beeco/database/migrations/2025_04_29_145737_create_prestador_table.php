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
        Schema::create('prestadores', function (Blueprint $table) {
            $table->id();
            $table -> foreignId('id_usuarios') -> constrained('users', 'id_usuarios');
            $table -> string('profissao');
            $table -> string('sobre') -> nullable();
            $table -> string('foto_1') -> nullable();
            $table -> string('foto_2') -> nullable();
            $table -> string('foto_3') -> nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('prestadores');
    }
};