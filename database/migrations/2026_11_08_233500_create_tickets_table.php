
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();

            $table->string('ticket_number')->unique();

            // Employee experiencing the problem
            $table->foreignId('user_id')
                ->constrained('users')
                ->restrictOnDelete();

            // Person who captured the ticket
            $table->foreignId('created_by')
                ->constrained('users')
                ->restrictOnDelete();

            $table->foreignId('department_id')
                ->constrained('departments')
                ->restrictOnDelete();

            // Category relationship will be added later
            $table->unsignedBigInteger('category_id');

            // Device may be unknown or not applicable
            $table->unsignedBigInteger('asset_id')->nullable();

            $table->string('ticket_type');

            $table->string('subject');

            $table->text('description');

            $table->string('employee_urgency');

            $table->string('priority')->default('Medium');

            $table->string('status')->default('Open');

            $table->boolean('approval_required')->default(false);

            // Response SLA tracking
            $table->timestamp('response_due_at')->nullable();

            $table->timestamp('first_responded_at')->nullable();

            // Resolution SLA tracking
            $table->timestamp('resolution_due_at')->nullable();

            $table->timestamp('resolved_at')->nullable();

            $table->timestamp('closed_at')->nullable();

            // Pending ticket information
            $table->string('pending_reason')->nullable();

            $table->timestamp('pending_since')->nullable();

            $table->date('follow_up_date')->nullable();

            // Reopening information
            $table->timestamp('reopened_at')->nullable();

            $table->timestamps();

            $table->index(['user_id', 'status']);
            $table->index(['department_id', 'status']);
            $table->index(['priority', 'status']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
