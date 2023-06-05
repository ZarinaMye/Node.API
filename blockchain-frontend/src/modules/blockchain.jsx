import { Fragment } from 'react';
import Block from './Block';
import "../app.css";

const Blockchain = ({ blocks, onAddBlock }) => {
  return (
    <>
      <form onSubmit={onAddBlock}>
        <p>Enter data you want to save in the blockchain</p>
        <div className="form">
          <input type='text' name='data' required/>
          <button className="btn">Create Block</button>
        </div>
      </form>
    {/*   <h3>Saved block-data:</h3> */}
      <ul>
        {blocks.map((block) => (
          <Fragment key={block.hash}>
            <Block block={block} />
          </Fragment>
        ))}
      </ul>
   {/*    <button className="btn">Validate chain</button> */}
    </>
  );
};

export default Blockchain;