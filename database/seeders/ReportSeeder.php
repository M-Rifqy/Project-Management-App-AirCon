<?php

namespace Database\Seeders;

use App\Models\Report;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $report = [
            [
                'reported_by' => 'tulis apa aja',
                'job_date' => 'tulis apa aja',
                'customer_name' => 'tulis apa aja',
                'phone_number' => 'tulis apa aja',
                'address' => 'tulis apa aja',
                'ac_brand' => 'tulis apa aja',
                'ac_type' => 'tulis apa ajatype-x',
                'service_description' => 'tulis apa aja',
                'freon_pressure' => 'tulis apa aja',
                'ampere_pressure' => 'tulis apa aja',
                'description' => 'tulis apa aja',
                'cost' => 'tulis apa aja',
            ]
        ];
        Report::insert($report);
    }
}
