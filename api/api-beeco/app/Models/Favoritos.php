<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Favoritos extends Model
{
    protected $table = 'favoritos';
    protected $primaryKey = 'id_favorito';

    protected $fillable = [
        'id_contratante',
        'id_prestador',
    ];

    // Relacionamento com o contratante
    public function contratante()
    {
        return $this->belongsTo(Contratante::class, 'id_contratante');
    }

    // Relacionamento com o prestador
    public function prestador()
    {
        return $this->belongsTo(Prestador::class, 'id_prestador');
    }
}

