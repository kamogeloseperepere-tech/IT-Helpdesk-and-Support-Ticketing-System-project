<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Department extends Model
{
    protected $fillable = [
        'department_name',
        'department_code',
        'description',
        'status',
    ];

    public function users()
{
    return $this->belongsToMany(User::class);
}

    public function tickets(): HasMany
    {
        return $this->hasMany(Ticket::class);
    }
}
