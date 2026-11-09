
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('ticket_status_histories', function (Blueprint $table) {
            $table->id();

            $table->foreignId('ticket_id')
                ->constrained('tickets')
                ->cascadeOnDelete();

            // Nullable because the system can make automatic changes
            $table->foreignId('changed_by')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            $table->string('old_status')->nullable();

            $table->string('new_status');

            $table->text('reason')->nullable();

            $table->timestamp('changed_at');

            $table->index(['ticket_id', 'changed_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ticket_status_histories');
    }
};
