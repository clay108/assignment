import React from 'react';

const FrequencyTable = ({ frequencies }) => {
  console.log(frequencies); // Check the data passed
  console.log("Hii");

  if (!frequencies || frequencies.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div>No data to display</div>
        <div>Please enter a valid URL</div>
      </div>
    );   // Handle case where no data is available
  }

  return (
    <div className="table-container">
      <style>
        {`
          .table-container {
            margin: 20px;
            padding: 10px;
            display: flex;
            justify-content: center;
          }

          .frequency-table {
            width: 80%;
            border-collapse: collapse;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .frequency-table th,
          .frequency-table td {
            padding: 12px 15px;
            text-align: left;
          }

          .frequency-table th {
            background-color: #4CAF50;
            color: white;
            font-size: 16px;
          }

          .frequency-table tr:nth-child(even) {
            background-color: #f2f2f2;
          }

          .frequency-table tr:hover {
            background-color: #ddd;
          }

          .frequency-table td {
            font-size: 14px;
            border-bottom: 1px solid #ddd;
          }
        `}
      </style>
      <table className="frequency-table">
        <thead>
          <tr>
            <th>Word</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          {frequencies.map((item, index) => (
            <tr key={index}>
              <td>{item.word}</td>
              <td>{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FrequencyTable;
