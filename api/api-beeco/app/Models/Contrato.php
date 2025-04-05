<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contrato extends Model
{
    protected $table = 'contratos';
    protected $primaryKey = 'id_contrato';
    public $incrementing = true;

    protected $fillable = [
        'data_inicio', 'data_fim', 'status', 'valor_final', 'id_prestador', 'id_contratante', 'id_servico'
    ];

    // Relacionamento: Um contrato pertence a um prestador
    public function prestador()
    {
        return $this->belongsTo(Prestador::class, 'id_prestador', 'id_prestador');
    }

    // Relacionamento: Um contrato pertence a um contratante
    public function contratante()
    {
        return $this->belongsTo(Contratante::class, 'id_contratante', 'id_contratante');
    }

    // Relacionamento: Um contrato pertence a um serviço
    public function servico()
    {
        return $this->belongsTo(Servico::class, 'id_servico', 'id_servico');
    }

    // Relacionamento: Um contrato pode ter muitas avaliações
    public function avaliacoes()
    {
        return $this->hasMany(Avaliacao::class, 'id_contrato', 'id_contrato');
    }
}