<?php

namespace Database\Seeders;

use App\Models\Profissoes;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProfissoesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $profissoes = [
            [
                'nome' => 'Pedreiro',
                'descricao' => 'Profissional especializado em construção civil',
                'categoria' => 'Construção Civil'
            ],
            [
                'nome' => 'Eletricista',
                'descricao' => 'Profissional especializado em instalações elétricas',
                'categoria' => 'Manutenção'
            ],
            [
                'nome' => 'Encanador',
                'descricao' => 'Profissional especializado em instalações hidráulicas',
                'categoria' => 'Manutenção'
            ],
            [
                'nome' => 'Pintor',
                'descricao' => 'Profissional especializado em pintura',
                'categoria' => 'Acabamento'
            ],
            [
                'nome' => 'Jardineiro',
                'descricao' => 'Profissional especializado em manutenção de jardins',
                'categoria' => 'Jardinagem'
            ],
            [
                'nome' => 'Diarista',
                'descricao' => 'Profissional especializado em limpeza doméstica',
                'categoria' => 'Limpeza'
            ],
            [
                'nome' => 'Babá',
                'descricao' => 'Profissional especializado em cuidar de crianças',
                'categoria' => 'Cuidados Pessoais'
            ],
            [
                 'nome' => 'Cuidadora',
                 'descricao' => 'Profissional especializado em cuidar de idosos',
                 'categoria' => 'Cuidados Pessoais'
            ]
        ];

        foreach ($profissoes as $profissao){
            Profissoes::cretae($profissao);
        }
    }
}
