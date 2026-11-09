
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('ticket_follow_up_requests', function (Blueprint $table) {
            $table->id();

            $table->foreignId('ticket_id')
                ->constrained('tickets')
                ->cascadeOnDelete();

            $table->foreignId('requested_by')
                ->constrained('users')
                ->restrictOnDelete();

            $table->foreignId('acknowledged_by')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            $table->text('request_message');

            $table->string('status')->default('Submitted');

            $table->text('acknowledgement_message')->nullable();

            $table->timestamp('requested_at');

            $table->timestamp('acknowledged_at')->nullable();

            $table->timestamp('completed_at')->nullable();

            $table->timestamps();

            $table->index(['ticket_id', 'status']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ticket_follow_up_requests');
    }
};
