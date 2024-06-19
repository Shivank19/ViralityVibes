import { useState } from 'react';
import axios from 'axios';

const ViralityPredictor = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.response('http://localhost:8000/predict/', {
        text,
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error predicting virality: ', error);
    }
  };

  return (
    <div>
      <h1>Virality Predictor</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows='4'
          cols='50'
        />
        <button type='submit'>Predict</button>
      </form>
      {result && (
        <div>
          <h2>Virality Score: {result.virality_score}</h2>
          <h3>Suggestions</h3>
          <ul>
            {result.suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ViralityPredictor;
