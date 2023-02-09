<?php

namespace App\Http\Requests\User\Dashboard;

use Illuminate\Foundation\Http\FormRequest;
use Auth;

class Store extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user()->hasRole('user');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'job_date' => 'required',
            'customer_name' => 'required',
            'phone_number' => 'required',
            'address' => 'required',
            'ac_brand' => 'required',
            'ac_type' => 'required',
            'service_description' => 'required',
            'freon_pressure' => 'required',
            'ampere_pressure' => 'required',
            'description' => 'required',
            'cost' => 'required',
        ];
    }
}
