import { useState, useEffect } from 'react';
import axios from 'axios';
import './app.css';
import Blockchain from './modules/blockchain';

const App = () => {
  const [blockchain, setBlockchain] = useState([]);
  const url = 'http://localhost:5001/api/1/blocks';

  const loadBlockchain = async () => {
    const { data } = await axios.get(url);
    setBlockchain(data);
    console.log(data);
  };

  useEffect(() => {
    loadBlockchain();
  }, []);

  const onAddBlockHandler = async (activity) => {
    try {
      const newBlock = { data: activity };
      const response = await axios.post(url, newBlock);
      console.log(response); 
      loadBlockchain();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <article className="container">
        <h1>My activity Blockchain</h1>
        <section>
          <Blockchain blocks={blockchain} onAddBlock={onAddBlockHandler} />
        </section>
      </article>
    </main>
  );
};

export default App;