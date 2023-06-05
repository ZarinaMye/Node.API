const Block = ({ block }) => {
    return (
        <li>
            <strong>Data: {block.data}</strong><br />
            Timestamp: {block.timestamp}<br />
            Lasthash: {block.lastHash}<br />
            Hash: {block.hash}
        </li>
    )
};
  
export default Block;