<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use App\Models\TicketCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class TicketController extends Controller
{
    /**
     * Display the support ticket submission form.
     */
    public function create(Request $request)
    {
        $categories = TicketCategory::where('is_active', true)
            ->orderBy('category_name')
            ->get(['id', 'category_name']);

        $departments = $request->user()
            ->departments()
            ->where('status', 'Active')
            ->orderBy('department_name')
            ->get(['departments.id', 'department_name']);

        return Inertia::render('tickets/create', [
            'categories' => $categories,
            'departments' => $departments,
        ]);
    }

    /**
     * Save a newly submitted support ticket.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'department_id' => [
                'required',
                Rule::exists('department_user', 'department_id')
                    ->where('user_id', $request->user()->id),
            ],
            'category_id' => [
                'required',
                Rule::exists('ticket_categories', 'id')
                    ->where('is_active', true),
            ],
            'ticket_type' => [
                'required',
                Rule::in(['Technical Problem', 'IT Service Request']),
            ],
            'subject' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string', 'max:5000'],
            'employee_urgency' => [
                'required',
                Rule::in(['Low', 'Medium', 'High', 'Critical']),
            ],
        ]);

        do {
            $ticketNumber = 'JKD-' . now()->format('Ymd') . '-' . Str::upper(Str::random(6));
        } while (Ticket::where('ticket_number', $ticketNumber)->exists());

        Ticket::create([
            'ticket_number' => $ticketNumber,
            'user_id' => $request->user()->id,
            'created_by' => $request->user()->id,
            'department_id' => $validated['department_id'],
            'category_id' => $validated['category_id'],
            'ticket_type' => $validated['ticket_type'],
            'subject' => $validated['subject'],
            'description' => $validated['description'],
            'employee_urgency' => $validated['employee_urgency'],
            'priority' => 'Medium',
            'status' => 'Open',
        ]);

        return Redirect::route('dashboard')
            ->with('success', 'Your support ticket has been submitted successfully.');
    }
}
