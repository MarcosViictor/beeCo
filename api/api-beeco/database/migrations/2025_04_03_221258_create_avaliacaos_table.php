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
        Schema::create('avaliacaos', function (Blueprint $table) {
            $table->id('id_avaliacao');
            $table->text('descricao')->nullable();
            $table->unsignedInteger('nota'); // Removi CHECK por compatibilidade
            $table->foreignId('id_prestador')->constrained('prestadores', 'id_prestador');
            $table->foreignId('id_contratante')->constrained('contratantes', 'id_contratante');
            $table->foreignId('id_contrato')->nullable()->constrained('contratos', 'id_contrato');
            $table->timestamps();    
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('avaliacaos');
    }
};
