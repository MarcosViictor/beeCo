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
        Schema::create('profissoes', function (Blueprint $table) {
            $table->id('id_profissao');
            $table->string('nome');
            $table->string('descricao')->nullable();
            $table->string('categoria');
            $table->boolean('profissao_customizada')->default(false);
            $table->foreignId('crated_by')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profissoes');
    }
};
