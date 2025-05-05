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
        Schema::create('endereco', function (Blueprint $table) {
            $table -> id('id_endereco');
            $table -> string('rua');
            $table -> string('numero') -> nullable();
            $table -> string('complemento') -> nullable(); 
            $table -> string('bairro');
            $table -> string('cidade');
            #Char: Por conta de usar apenas as siglas, ex: SP, CE
            $table -> char('estado', 2);
            $table -> string('cep', 9) -> nullable();
            $table -> string('pais')-> default('Brasil');   

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('endereco');
    }
};
