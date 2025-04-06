import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // const res = await axios.post('http://localhost:8000/api/openai/chat', { prompt });
            const res = await axios.post('http://localhost:8000/api/gemini/chat', { prompt });
            if (res.data.error) {
                console.error('Error:', res.data.error.message);
                setResponse(res.data.error.message);
            } else {
                setResponse(res.data);
            }
        } catch (error) {
            console.error('Error:', error);
            setResponse('An error occurred. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
                <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">AIへの質問</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Enter your prompt here"
                        className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Send
                    </button>
                </form>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">AIからの回答:</h2>
                    <p className="text-gray-700 bg-gray-100 p-4 rounded-lg">{response}</p>
                </div>
            </div>
        </div>
    );
};

export default Chat;
