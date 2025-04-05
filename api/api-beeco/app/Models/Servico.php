<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Servico extends Model
{
    protected $table = 'servicos';
    protected $primaryKey = 'id_servico';
    public $incrementing = true;

    protected $fillable = [
        'nome', 'descricao', 'tipo', 'valor', 'id_prestador', 'id_contratante'
    ];

    // Relacionamento: Um serviço pertence a um prestador
    public function prestador()
    {
        return $this->belongsTo(Prestador::class, 'id_prestador', 'id_prestador');
    }

    // Relacionamento: Um serviço pode pertencer a um contratante (opcional)
    public function contratante()
    {
        return $this->belongsTo(Contratante::class, 'id_contratante', 'id_contratante');
    }

    // Relacionamento: Um serviço pode ter muitos contratos
    public function contratos()
    {
        return $this->hasMany(Contrato::class, 'id_servico', 'id_servico');
    }
}