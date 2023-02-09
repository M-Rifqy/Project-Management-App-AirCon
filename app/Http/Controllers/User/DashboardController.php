<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Report;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class DashboardController extends Controller
{
    public function index()
    {
        $reports = Report::where('reported_by', auth()->user()->id)->get();
        return inertia('User/Dashboard/Index', [
            'reports' => $reports
        ]);
    }

    public function create()
    {
        return inertia('User/Dashboard/Create');
    }

    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'job_date' => ['required'],
            'customer_name' => ['required'],
            'phone_number' => ['required'],
            'address' => ['required'],
            'ac_brand' => ['required'],
            'ac_type' => ['required'],
            'service_description' => ['required'],
            'freon_pressure' => ['required'],
            'ampere_pressure' => ['required'],
            'description' => ['required'],
            'cost' => ['required'],
        ])->validate();

        $roleId = ['reported_by' => auth()->user()->id];
        Report::create(array_merge($request->all(), $roleId));

        return redirect(route('user.dashboard.index'))->with([
            'message' => "Data inserted successfully",
            'type' => 'success'
        ]);
    }

    public function edit($id, Report $report)
    {
        $report_data = $report->find($id);

        return Inertia::render('User/Dashboard/Edit', [
            'report_data' => $report_data
        ]);
    }

    public function update($id, Request $request)
    {
        Validator::make($request->all(), [
            'job_date' => ['required'],
            'customer_name' => ['required'],
            'phone_number' => ['required'],
            'address' => ['required'],
            'ac_brand' => ['required'],
            'ac_type' => ['required'],
            'service_description' => ['required'],
            'freon_pressure' => ['required'],
            'ampere_pressure' => ['required'],
            'description' => ['required'],
            'cost' => ['required'],
        ])->validate();

        Report::find($id)->update($request->all());
        return redirect()->route('user.dashboard.index');
    }

    public function destroy($id)
    {
        $report = Report::findOrFail($id);
        $report->delete();
        return redirect()->route('user.dashboard.index')->with([
            'message' => "Data deleted successfully",
            'type' => 'success'
        ]);
    }

    public function show()
    {
        //
    }

    public function dashboardDetail()
    {
        $report = Report::where('reported_by', auth()->user()->id)->get();
        return Inertia::render('User/Dashboard/DashboardDetail', [
            'reports' => $report,
        ]);
    }

    public function invoice($id, Report $report)
    {
        $invoice_data = $report->find($id);

        return Inertia::render('User/Dashboard/Invoice', [
            'invoice_data' => $invoice_data,
        ]);
    }

    public function job($id, Report $report)
    {
        $job_data = $report->find($id);

        return Inertia::render('User/Dashboard/JobReport', [
            'job_data' => $job_data
        ]);
    }
}
