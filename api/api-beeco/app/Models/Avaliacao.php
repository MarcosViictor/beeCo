<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Avaliacao extends Model
{
    protected $table = 'avaliacoes';
    protected $primaryKey = 'id_avaliacao';
    public $incrementing = true;

    protected $fillable = [
        'descricao', 'nota', 'id_prestador', 'id_contratante', 'id_contrato'
    ];

    // Relacionamento: Uma avaliação pertence a um prestador
    public function prestador()
    {
        return $this->belongsTo(Prestador::class, 'id_prestador', 'id_prestador');
    }

    // Relacionamento: Uma avaliação pertence a um contratante
    public function contratante()
    {
        return $this->belongsTo(Contratante::class, 'id_contratante', 'id_contratante');
    }

    // Relacionamento: Uma avaliação pertence a um contrato (opcional)
    public function contrato()
    {
        return $this->belongsTo(Contrato::class, 'id_contrato', 'id_contrato');
    }
}