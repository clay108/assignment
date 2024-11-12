import React, { useState } from 'react';
import URLForm from './components/URLForm';
import FrequencyTable from './components/FrequencyTable';
import axios from 'axios';

function App() {
  const [frequencies, setFrequencies] = useState([]);

  const handleAnalyze = async (url) => {
    try {
      const response = await axios.post('http://localhost:5000/api/analyze', { url });
      setFrequencies(response.data);
    } catch (error) {
      console.error("Error fetching word frequencies:", error);
    }
  };

  return (
    <div className="App">
      <style>
        {`
          .App {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background-color: #f4f7fb;
            font-family: 'Arial', sans-serif;
          }

          h1 {
            font-size: 36px;
            color: #333;
            margin-bottom: 30px;
            text-align: center;
          }

          .container {
            max-width: 1000px;
            width: 100%;
            padding: 20px;
            background-color: white;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            margin-top: 20px;
          }
        `}
      </style>
      <div className="container">
        <h1>Word Frequency Analyzer</h1>
        <URLForm onAnalyze={handleAnalyze} />
        <FrequencyTable frequencies={frequencies} />
      </div>
    </div>
  );
}

export default App;
