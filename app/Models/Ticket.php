<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Ticket extends Model
{
    protected $fillable = [
        'ticket_number',
        'user_id',
        'created_by',
        'department_id',
        'category_id',
        'asset_id',
        'ticket_type',
        'subject',
        'description',
        'employee_urgency',
        'priority',
        'status',
        'approval_required',
        'response_due_at',
        'first_responded_at',
        'resolution_due_at',
        'resolved_at',
        'closed_at',
        'pending_reason',
        'pending_since',
        'follow_up_date',
        'reopened_at',
    ];

    public function employee(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(TicketCategory::class, 'category_id');
    }
}
