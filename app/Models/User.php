<?php

namespace App\Models;

use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;

#[Fillable(['name', 'email', 'password'])]
#[Hidden(['password', 'remember_token'])]
class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable;

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    // Departments associated with this employee
    public function departments(): BelongsToMany
{
    return $this->belongsToMany(Department::class);
}

    // Tickets belonging to this employee
    public function submittedTickets(): HasMany
    {
        return $this->hasMany(Ticket::class, 'user_id');
    }

    // Tickets captured by this employee
    public function createdTickets(): HasMany
    {
        return $this->hasMany(Ticket::class, 'created_by');
    }
}
