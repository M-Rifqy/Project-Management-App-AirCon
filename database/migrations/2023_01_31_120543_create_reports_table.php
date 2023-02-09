<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->foreignId('reported_by');
            $table->string('job_date', 100);
            $table->string('customer_name', 100);
            $table->string('phone_number', 100);
            $table->string('address', 100);
            $table->string('ac_brand', 100);
            $table->string('ac_type', 100);
            $table->string('service_description', 100);
            $table->string('freon_pressure', 100);
            $table->string('ampere_pressure', 100);
            $table->string('description', 100);
            $table->string('cost', 100);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reports');
    }
};
