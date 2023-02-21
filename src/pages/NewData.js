import React, { useState, useEffect } from 'react';

export default function NewData() {
  const [data, setData] = useState(null);

  async function fetchData(apiUrl, body) {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
  
    return data;
  }

  useEffect(() => {
    const apiUrl = 'https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI';
    const body = {
      "query": "toilets",
      "pageNumber": 0,
      "size": 0,
      "additionalPages": 0,
      "sort": 2
    };

    fetchData(apiUrl, body)
      .then((data) => {
        setData(data)
    })
      .catch(error => console.error(error));
      console.log(data)
  }, []);

  if (!data) {
    return <div>Loading data...</div>;
  }

  // Render the data
  return (
    <div>
      {data.products.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
