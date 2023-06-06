const crypto = require('crypto'); //Node´s kryptobiliotek

const generateHash = (...args) => {
  
  const hash = crypto.createHash('sha256'); //ange algoritm/sha256
  
  hash.update(args.sort().join(' ')); //hash skapas
  
  return hash.digest('hex'); //output i hex-format
};

module.exports = generateHash;