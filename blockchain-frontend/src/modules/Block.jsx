const Block = ({ block }) => {

    return (
        
        //Valde att visa all block info ist.f endast data. 
        <li>
            Data: <strong>{block.data}</strong><br />
            Timestamp: {block.timestamp}<br />
            Lasthash: {block.lastHash}<br />
            Hash: {block.hash}
        </li>
    );
};
  
export default Block;