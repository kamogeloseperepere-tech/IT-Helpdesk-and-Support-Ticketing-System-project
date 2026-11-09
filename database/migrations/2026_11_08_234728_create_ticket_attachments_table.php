
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('ticket_attachments', function (Blueprint $table) {
            $table->id();

            $table->foreignId('ticket_id')
                ->constrained('tickets')
                ->cascadeOnDelete();

            $table->foreignId('uploaded_by')
                ->constrained('users')
                ->restrictOnDelete();

            $table->string('original_file_name');

            $table->string('stored_file_name')->unique();

            $table->string('file_path');

            $table->string('mime_type')->nullable();

            $table->unsignedBigInteger('file_size');

            $table->string('visibility')->default('Employee-visible');

            $table->timestamps();

            $table->index(['ticket_id', 'visibility']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ticket_attachments');
    }
};
