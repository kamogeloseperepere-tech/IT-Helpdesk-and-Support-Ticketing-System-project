
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\TicketController;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth'])->group(function () {

    // Employee Dashboard
    Route::get('/dashboard', function (Request $request) {
        return Inertia::render('dashboard', [
            'authUser' => $request->user()->only('name', 'email'),
        ]);
    })->name('dashboard');

    // Display the Support Ticket form
    Route::get('/tickets/create', [TicketController::class, 'create'])
        ->name('tickets.create');

    // Save a submitted Support Ticket
    Route::post('/tickets', [TicketController::class, 'store'])
        ->name('tickets.store');

});
