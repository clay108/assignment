
import React, { useState } from 'react';

function URLForm({ onAnalyze }) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnalyze(url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <style>

        {`
          form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            // width: 30%;
            // margin: 10px 0;
          }

          input {
            width: 30%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
          }

          button {
            width: 30%;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
          }

          button:hover {
            background-color: #45a049;
          }

          // /* Ensure the form is centered within its parent container */
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100%;
          }
        `}
      </style>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
        required
      />
      <button type="submit">Analyze</button>
    </form>
  );
}

export default URLForm;
