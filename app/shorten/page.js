"use client";
import React, { useState } from "react";

const Shorten = () => {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [generated, setGenerated] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const generate = async () => {
        if (!url || !shortUrl) {
            setError('Please enter both URL and short URL');
            return;
        }

        setLoading(true);
        setError("");
        try {
            const response = await fetch('/api/generate', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: url, shortUrl: shortUrl }),
            });
            const data = await response.json();
            if (data.success) {
                setUrl("");
                setShortUrl("");
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
            } else {
                setError(data.message || 'Failed to generate short URL');
            }
        } catch (error) {
            console.error('Error generating short URL:', error);
            setError('An error occurred while generating the short URL.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto max-w-lg bg-purple-100 my-8 sm:my-16 p-4 sm:p-8 rounded-lg shadow-md">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Generate your short URLs</h1>
            <div className="flex flex-col">
                <input type="text"
                    className="p-3 sm:p-2 outline-purple-500 rounded-md bg-white text-sm sm:text-base"
                    value={url}
                    placeholder="Enter your URL"
                    onChange={e => {setUrl(e.target.value)}}
                />
                <br />

                <input type="text"
                    className="p-3 sm:p-2 outline-purple-500 rounded-md bg-white text-sm sm:text-base"
                    value={shortUrl}
                    placeholder="Enter your preferred short URL text"
                    onChange={e => {setShortUrl(e.target.value)}}
                />
                <br />

                <button 
                    onClick={generate} 
                    disabled={loading}
                    className={`bg-purple-600 rounded-3xl p-3 sm:p-2 px-6 sm:px-4 text-white font-semibold transition-colors flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-purple-700'}`}
                >
                    {loading ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Generating...</span>
                        </>
                    ) : (
                        'Generate'
                    )}
                </button>
            </div>
            {error && (
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-red-100 border border-red-400 rounded-md">
                    <p className="text-red-700 text-sm sm:text-base">{error}</p>
                </div>
            )}
            {generated && ( 
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-green-100 rounded-md">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2">Your Short URL:</h2>
                    <a href={generated} target="_blank" rel="noopener noreferrer" className="text-purple-600 underline break-all text-sm sm:text-base">{generated}</a>
                </div>
            )}
        </div>
    );
};

export default Shorten;
