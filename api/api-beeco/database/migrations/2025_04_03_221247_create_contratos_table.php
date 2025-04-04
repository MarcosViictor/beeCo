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
        Schema::create('contratos', function (Blueprint $table) {
            $table->id('id_contratos');
            $table -> date('data_inicio');
            $table -> date('data_fim') -> nullable();
            $table -> enum('status', ['ativo', 'concluido', 'cancelado']);
            $table -> decimal('valor_final',10,2) -> nullable();
            $table->foreignId('id_prestador')->constrained('prestadores', 'id_prestador');
            $table->foreignId('id_contratante')->constrained('contratantes', 'id_contratante');
            $table->foreignId('id_servico')->constrained('servicos', 'id_servico');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contratos');
    }
};
