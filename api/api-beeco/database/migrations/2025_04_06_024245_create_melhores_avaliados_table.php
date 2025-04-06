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
        Schema::create('melhores_avaliados', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_prestador')->constrained('prestadores', 'id_prestador')->onDelete('cascade');
            $table->float('media_avaliacao')->default(0);
            $table->integer('quantidade_avaliacoes')->default(0);
            $table->timestamps();

            $table->unique('id_prestador');
        });
    }
  
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('melhores_avaliados');
    }
};
