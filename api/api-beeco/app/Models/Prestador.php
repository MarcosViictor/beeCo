<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Prestador extends Model
{
    protected $table = 'prestadores';
    protected $primaryKey = 'id_prestador';
    public $incrementing = true;

    protected $fillable = [
        'id_usuario', 'profissao', 'sobre', 'foto_servico_1', 'foto_servico_2', 'foto_servico_3'
    ];

    // Relacionamento: Um prestador pertence a um usuário
    public function user()
    {
        return $this->belongsTo(User::class, 'id_usuario', 'id');
    }

    // Relacionamento: Um prestador pode ter muitos serviços
    public function servicos()
    {
        return $this->hasMany(Servico::class, 'id_prestador', 'id_prestador');
    }

    // Relacionamento: Um prestador pode ter muitos contratos
    public function contratos()
    {
        return $this->hasMany(Contrato::class, 'id_prestador', 'id_prestador');
    }

    // Relacionamento: Um prestador pode ter muitas avaliações
    public function avaliacoes()
    {
        return $this->hasMany(Avaliacao::class, 'id_prestador', 'id_prestador');
    }

    public function favoritos()
    {
        return $this->hasMany(Favoritos::class, 'id_prestador', 'id_prestador');
    }
}

