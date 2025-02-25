<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuizController;
use App\Models\Quiz;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;




Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get("/materi", function () {
    return Inertia::render("Materi/index");
});

Route::get('/quiz', function () {
    $quizzes = Quiz::all();
    return Inertia::render('Quiz/Home', [
        "quizzes" => $quizzes
    ]);
});

Route::get('/quiz-test/{quiz:title}', [QuizController::class, "index"])->name('quiz.study');



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
