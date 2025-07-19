import React, { useState } from 'react';
import axios from 'axios';

const XTrendsDisplay = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('http://127.0.0.1:5000/api/x-trends', { query });
      setResults(res.data);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">X Trends Analysis</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Enter a topic (e.g., Biden)"
        />
        <button
          onClick={handleAnalyze}
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {results && (
        <div className="mt-6 space-y-4">
          {['cnn', 'foxnews', 'npr', 'cbc', 'search_results'].map((key) => (
            <div key={key}>
              <h3 className="text-xl font-semibold capitalize">{key.replace('_', ' ')}</h3>
              <ul className="space-y-2">
                {results[key].length > 0 ? (
                  results[key].map((tweet, index) => (
                    <li key={index} className="bg-gray-100 p-3 rounded shadow">
                      {tweet.text ? tweet.text : tweet.error || 'No content'}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500">No tweets found.</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default XTrendsDisplay;