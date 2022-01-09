<?php

namespace App\Models\Game;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Score extends Model
{
    use HasFactory;

    public $attributes =[
        'score'
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
