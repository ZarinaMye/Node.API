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



///////// Med input fält ist API, för att skriva in data i blocken //////////

/* import { Fragment } from 'react';
import Block from './Block';
import "../app.css";

const Blockchain = ({ blocks, onAddBlock }) => {
  return (
    <>
      <form onSubmit={onAddBlock}></form>
        <div className="form">
          <input type='text' name='data' required/>
          <button className="btn">Save</button>
        </div>
      </form>
      <h4>Saved block-data:</h4>
      <ul>
        {blocks.map((block) => (
          <Fragment key={block.hash}>
            <Block block={block} />
          </Fragment>
        ))}
      </ul>
      <button className="btn">Validate chain</button>
    </>
  );
}; */