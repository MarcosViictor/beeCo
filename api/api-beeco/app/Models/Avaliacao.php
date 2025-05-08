<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Avaliacao extends Model
{
    protected $table = 'avaliacoes'; 

    protected $fillable = [
        'nome_usuario',
        'url_site',
        'nota',
        'comentario',
    ];
}