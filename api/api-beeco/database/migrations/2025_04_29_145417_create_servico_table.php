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
        Schema::create('servicos', function (Blueprint $table) {
            $table->id('id_servicos');
            $table -> string('nome') -> nullable();
            $table -> text('descricao') -> nullable();
            $table -> string('tipo') -> nullable();
            $table -> decimal('valor', 10, 2) -> nullable();
            $table->foreignId('id_prestador')->constrained('prestadores', 'id_prestador');
            $table->foreignId('id_contratante')->nullable()->constrained('contratantes', 'id_contratante');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('servicos');
    }
};
