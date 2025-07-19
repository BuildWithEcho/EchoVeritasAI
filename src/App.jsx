import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/verify', { url });
      setResult(response.data);
    } catch (error) {
      console.error('Verification error:', error);
      setResult({ error: 'Failed to verify source.' });
    } finally {
      setLoading(false);
    }
  };

  const getBiasColor = (score) => {
    const numeric = parseFloat(score);
    if (numeric <= -0.5 || numeric >= 0.5) return 'text-red-500';
    if (numeric <= -0.2 || numeric >= 0.2) return 'text-yellow-400';
    return 'text-green-400';
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <h1 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text animate-fade-in">
        EchoVeritasAI
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-4 mb-2 animate-fade-in">
        <input
          type="text"
          placeholder="Enter news article URL"
          className="w-full md:w-2/3 px-4 py-2 rounded text-black bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          onClick={handleVerify}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded shadow-lg transition duration-200"
        >
          {loading ? (
            <span className="flex items-center animate-pulse">⏳ Verifying...</span>
          ) : (
            'Verify'
          )}
        </button>
      </div>

      {/* Bias Legend */}
      <div className="text-center mb-6 animate-fade-in">
        <p className="text-sm text-gray-400">
          <span className="text-green-400">Center: -0.19 to +0.19</span> |{' '}
          <span className="text-yellow-400">Lean: -0.49 to -0.2 or +0.2 to +0.49</span> |{' '}
          <span className="text-red-500">Extreme: -1.0 to -0.5 or +0.5 to +1.0</span>
        </p>
      </div>

      {loading && (
        <div className="text-center animate-fade-in">
          <span className="text-yellow-400 font-medium">Fetching summary and bias...</span>
        </div>
      )}

      {result && result.error && (
        <div className="text-red-500 text-center mt-4 animate-fade-in">{result.error}</div>
      )}

      {result && !result.error && (
        <div className="mt-8 space-y-6 animate-fade-in">
          <div className="bg-neutral-900 p-6 rounded-xl shadow-md border border-white">
            <h2 className="text-xl font-semibold mb-2">📄 Article Summary</h2>
            {result.output.split('\n').map((line, index) => (
              line.trim() && <p key={index} className="mb-2">{line}</p>
            ))}
            <div className="mt-4 text-sm">
              <span className={getBiasColor(result.sourceBias)}>
                Source Bias: {result.sourceBias}
              </span>{' '}
              |{' '}
              <span className={getBiasColor(result.contentBias)}>
                Content Bias: {result.contentBias}
              </span>
            </div>
          </div>
        </div>
      )}

      <footer className="mt-12 text-center text-sm text-gray-500 animate-fade-in">
        Built by Jackson & Echo ⚡ | Transparency matters.
      </footer>

      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 0.8s ease-in-out both;
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
      <div className="mt-4 text-xs text-gray-500 text-center max-w-2xl mx-auto px-4">
  Disclaimer: EchoVeritasAI is an experimental tool that summarizes and analyzes news coverage using AI. While we strive for accuracy and transparency, this tool should not be used as a sole source for decision-making. Always verify with primary sources when possible.
</div>
    </div>
  );
};

export default App;
