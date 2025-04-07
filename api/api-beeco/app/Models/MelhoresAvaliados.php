<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MelhoresAvaliados extends Model
{
    protected $table = 'melhores_avaliados';
    public $timestamps = false;

    protected $fillable = [
        'id_prestador',
        'media_avaliacoes',
        'quantidade_avaliacoes',
    ];

    public function prestador()
    {
        return $this->belongsTo(Prestador::class, 'id_prestador');
    }
}
