<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;

    protected $fillable = ['reported_by', 'job_date', 'customer_name', 'phone_number', 'address', 'ac_brand', 'ac_type', 'service_description', 'freon_pressure', 'ampere_pressure', 'description', 'cost'];

    public function reportedBy()
    {
        $this->hasMany(User::class, 'reported_by');
    }
}

