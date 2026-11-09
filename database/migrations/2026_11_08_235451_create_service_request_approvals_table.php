
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('service_request_approvals', function (Blueprint $table) {
            $table->id();

            $table->foreignId('ticket_id')
                ->constrained('tickets')
                ->cascadeOnDelete();

            $table->foreignId('reviewed_by')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            $table->string('approval_status')->default('Pending');

            $table->text('approval_reason')->nullable();

            $table->text('review_comments')->nullable();

            $table->timestamp('reviewed_at')->nullable();

            $table->timestamps();

            $table->index(['ticket_id', 'approval_status']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('service_request_approvals');
    }
};
