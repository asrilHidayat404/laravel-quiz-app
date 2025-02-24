<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class QuizController extends Controller
{
    public function index(){
        return Inertia::render('Quiz/Home');
    }

    public function take_quiz(Request $request){
        // return Inertia::render('Quiz/index', [
        //     'materi' => $request->title,
        //     'level' => $request->level
        // ]);
    }
}
