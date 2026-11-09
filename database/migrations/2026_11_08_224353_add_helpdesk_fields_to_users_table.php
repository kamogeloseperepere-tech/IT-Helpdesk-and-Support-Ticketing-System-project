
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('employee_number')->nullable()->unique()->after('id');
            $table->string('employment_status')->nullable()->after('password');
            $table->string('account_status')->default('Active')->after('employment_status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropUnique(['employee_number']);

            $table->dropColumn([
                'employee_number',
                'employment_status',
                'account_status',
            ]);
        });
    }
};
