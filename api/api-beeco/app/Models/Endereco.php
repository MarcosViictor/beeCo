<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Endereco extends Model
{
    protected $table = 'enderecos';
    protected $primaryKey = 'id_endereco';
    public $incrementing = true;

    protected $fillable = [
        'rua',
        'numero',
        'complemento',
        'bairro',
        'cidade',
        'estado',
        'cep',
        'pais'
    ];

    public function user(){
        return $this -> hasOne(User::class, 'id_endereco', 'id_endereco');
    }

}

