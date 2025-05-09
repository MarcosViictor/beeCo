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
    Schema::create('favoritos', function (Blueprint $table) {
        $table->id('id_favorito');

        // Ambos são usuários, mas com "tipo" diferente
        $table->foreignId('id_contratante')->constrained('users', 'id')->onDelete('cascade');
        $table->foreignId('id_prestador')->constrained('users', 'id')->onDelete('cascade');

        $table->timestamps();   

        // Evita favoritagem duplicada
        $table->unique(['id_contratante', 'id_prestador']);
    });
}

public function down(): void
{
    Schema::dropIfExists('favoritos');
}

};
