<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Gemini\Laravel\Facades\Gemini;

class GeminiAIService
{
    protected $apiKey;

    public function __construct()
    {
        $this->apiKey = env('GEMINI_API_KEY');
    }

    public function chat($prompt)
    {
//        $client = Gemini::client($this->apiKey);
        $result = Gemini::geminiPro()->generateContent($prompt);        
        // Log::info($result);
        // https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=#{ENV['GEMINI_API_KEY']}
        $response = $result->text();
        Log::info($response);
        return $response;
    }

}
