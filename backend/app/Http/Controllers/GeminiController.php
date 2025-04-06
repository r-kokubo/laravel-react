<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\GeminiAIService;

class GeminiController extends Controller
{
    public function __construct(GeminiAIService $geminiAIService)
    {
        $this->geminiAIService = $geminiAIService;
    }

    public function chat(Request $request)
    {
        $prompt = $request->input('prompt');
        $response = $this->geminiAIService->chat($prompt);
        return $response;
    }
}
