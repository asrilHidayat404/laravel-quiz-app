<?php

namespace App\Http\Controllers;

// use App\Models\Quiz;

use App\Models\Quiz;
use Inertia\Inertia;



class QuizController extends Controller
{
    public function index($title)
    {
        return Inertia::render("Quiz/index", [
            'quizModel' => Quiz::find($title),
        ]);
    }
}
