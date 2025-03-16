// src/components/EffectDemo.js
import React, { useState, useEffect } from 'react';

const EffectDemo = () => {
  const [data, setData] = useState(null);
  const [fetchTrigger, setFetchTrigger] = useState(false);

  // when the component mounts and unmounts, log the event
  useEffect(() => {
    console.log('EffectDemo mounted'); // log when the component mounts

    return () => {
      console.log('EffectDemo unmounted'); // log when the component unmounts
    };
  }, []);// empty dependency array: only run on mount and unmount

  // when fetchTrigger changes, fetch data from an API
  useEffect(() => {
    if (!fetchTrigger) return; // only run when fetchTrigger is true
    console.log('Fetching data...');

    // use AbortController to support cancelling the request
    const controller = new AbortController();

    fetch('https://jsonplaceholder.typicode.com/todos/1', {
      signal: controller.signal,
    })
      .then(response => response.json())
      .then(json => {
        setData(json);
        console.log('Data fetched:', json);
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          console.error('Error fetching data:', error);
        }
      });

    // cleanup function: cancel the request when the effect re-runs or the component unmounts
    return () => {
      console.log('Cleaning up fetch effect');
      controller.abort();
    };
  }, [fetchTrigger]); // dependency: fetchTrigger

  return (
    <div>
      <h2>Effect Demo</h2>
      <button onClick={() => setFetchTrigger(prev => !prev)}>
        {fetchTrigger ? 'Cancel Fetch' : 'Fetch Data'}
      </button>
      {data && (
        <div>
          <h3>Fetched Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default EffectDemo;
