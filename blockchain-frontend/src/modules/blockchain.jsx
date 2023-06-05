import { Fragment } from 'react';
import Block from './Block';
import "../app.css";

const Blockchain = ({ blocks, onAddBlock }) => {
  return (
    <>
      <form onSubmit={onAddBlock}>
        <div className="form">
          <input type='text' name='data' required/>
          <button className="btn">Add Block</button>
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
};

export default Blockchain;