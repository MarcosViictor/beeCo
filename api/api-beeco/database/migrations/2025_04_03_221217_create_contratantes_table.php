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
        Schema::create('contratantes', function (Blueprint $table) {
            $table->id('id_contratante');
            $table -> foreignId('id_usuarios') -> constrained('usuarios', 'id_usuarios');
            $table -> string('foto_local') -> nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contratantes');
    }
};
