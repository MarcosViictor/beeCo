<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Users extends Authenticatable implements JWTSubject
{
    use Notifiable;

    protected $table = 'users';
    protected $primaryKey = 'id';
    public $incrementing = true;

    protected $fillable = [
        'nome',
        'email',
        'senha',
        'tipo',
        'data_nascimento',
        'sexo',
        'foto_perfil',
        'telefone',
        'id_endereco',
        'remember_token',
    ];

    protected $hidden = [
        'senha',
        'remember_token',
    ];

    /**
     * Para compatibilidade com o JWT Auth que procura pelo campo 'password'
     */
    public function getPasswordAttribute()
    {
        return $this->senha;
    }

    /**
     * Define senha quando password é usado
     */
    public function setPasswordAttribute($value)
    {
        $this->attributes['senha'] = $value;
    }

    // Mapeia o campo 'senha' para autenticação
    public function getAuthPassword()
    {
        return $this->senha;
    }

    // Suporte a JWT
    public function getJWTIdentifier()
    {
        $id = $this->getKey();
        if ($id === null) {
            // Se id for nulo, retornar uma string vazia ou algum valor padrão
            return '';
        }
        return (string) $id; // Convertendo explicitamente para string
    }

    public function getJWTCustomClaims()
    {
        return [
            'tipo' => $this->tipo,
        ];
    }

    // Relacionamento com Endereco
    public function endereco()
    {
        return $this->belongsTo(Endereco::class, 'id_endereco', 'id_endereco');
    }

    // Relacionamento com Contratante
    public function contratante()
    {
        return $this->hasOne(Contratante::class, 'id_usuarios', 'id');
    }

    // Relacionamento com Prestador
    public function prestador()
    {
        return $this->hasOne(Prestador::class, 'id_usuarios', 'id');
    }
}