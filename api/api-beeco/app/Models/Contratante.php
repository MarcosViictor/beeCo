<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contratante extends Model
{
    protected $table = 'contratantes';
    protected $primaryKey ='id_contratante';
    public $incrementing = true;

    protected $fillable = [
        'id_usuario', 'foto_local'
    ];

    public function servicos(){
        return $this -> hasMany(Servico:: class, 'id_contratante', 'id_contratante');
    }

    public function contratos(){
        return $this -> hasMany(Contrato:: class, 'id_contratante', 'id_contratante');
    }

    public function avaliacoes()
    {
        return $this->hasMany(Avaliacao::class, 'id_contratante', 'id_contratante');
    }

    public function favoritos()
    {
        return $this->hasMany(Favoritos::class, 'id_contratante', 'id_contratante');
    }
    
}

