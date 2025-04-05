<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;

class Users extends Authenticatable
{
    use Notifiable;

    protected $table = 'users';
    protected $primaryKey = 'id';
    public $incrementing = true;

    protected $fillable = [
        'name',
        'email',
        'password',
        'data_nascimento',
        'sexo',
        'tipo',
        'foto_perfil',
        'telefone',
        'id_endereco'
    ];

    protected  $hidden = [
        'password',
        'remember_token',
    ];

    public function endereco(){
        return $this -> belongsTo(Endereco::class, 'id_endereco', 'id_endereco');
    }

    public function contratante(){
        return $this -> hasOne(Contratante::class, 'id_usuarios', 'id');
    }

    
    public function prestador(){
        return $this -> hasOne(Prestador::class, 'id_usuarios', 'id');
    }



}
