
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('ticket_priority_histories', function (Blueprint $table) {
            $table->id();

            $table->foreignId('ticket_id')
                ->constrained('tickets')
                ->cascadeOnDelete();

            $table->foreignId('changed_by')
                ->constrained('users')
                ->restrictOnDelete();

            $table->string('old_priority')->nullable();

            $table->string('new_priority');

            $table->text('reason');

            $table->timestamp('changed_at');

            $table->index(['ticket_id', 'changed_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ticket_priority_histories');
    }
};
