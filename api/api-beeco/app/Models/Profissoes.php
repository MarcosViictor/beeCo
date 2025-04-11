<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profissoes extends Model
{
    protected $table = 'profissoes';
    protected $primaryKey = 'id_profissao';


    protected $filiable = [
        'nome',
        'descricao',
        'categoria',
        'profissao_customizada',
        'crated_by'
    ];

    protected $casts = [
        'profissao_customizada' => 'boolean'
    ];

    public function creator()
    {
        return $this->belongsTo(User::class, 'crated_by');
    }
}
