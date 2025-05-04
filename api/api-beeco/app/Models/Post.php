<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $table = 'posts';

    protected $fillable = [
        'user_id',
        'tipo_postagem', 
        'titulo',  
        'descricao', 
        'preco', 
        'categoria', 
        'imagem'
    ];

   
    protected $casts = [
        'preco' => 'decimal:2',
    ];

   
    public function user()
    {
        return $this->belongsTo(Users::class);
    }
}
