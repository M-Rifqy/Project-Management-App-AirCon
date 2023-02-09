<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subscriptionPlan = [
            [
                'name' => 'Basic',
                'price' => 18888,
                'active_period_in_months' => 2,
                'features' => json_encode(['feature1', 'feature2']),
            ],
            [
                'name' => 'Premium',
                'price' => 48888,
                'active_period_in_months' => 5,
                'features' => json_encode(['feature1', 'feature2', 'feature3', 'feature4', 'feature5']),
            ],
        ];

        SubscriptionPlan::insert($subscriptionPlan);
    }
}
