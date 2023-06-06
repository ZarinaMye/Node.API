import { useState } from 'react';
import Block from './Block';
import axios from 'axios';
import '../app.css';

const Blockchain = ({ blocks, onAddBlock }) => {

  const [generatedActivity, setGeneratedActivity] = useState('');

  const generateActivity = async () => {

    try {
      const response = await axios.get('http://www.boredapi.com/api/activity');
      const activity = response.data.activity;
      setGeneratedActivity(activity);
    } catch (error) {
      console.log(error);
    }
  };

  const saveActivity = () => {
    
    onAddBlock(generatedActivity);
    setGeneratedActivity(' ');
  };

  return (
    <>
      <div className="activity">
        <p>
          Never get bored, generate an activity and when you find a good one, 
          save it to the blockchain.
        </p>
        <button className="btn" onClick={generateActivity}>
          Generate Activity
        </button>
        {generatedActivity && (
          <>
            <p className="activityP">Generated activity: {generatedActivity}</p>
            <button className="btn" onClick={saveActivity}>
              Save Activity
            </button>
          </>
        )}
      </div>

      <ul>
        {blocks.map((block) => (
          <Block key={block.hash} block={block} />
        ))}
      </ul>
    </>
  );
};

export default Blockchain;