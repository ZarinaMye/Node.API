const crypto = require("crypto"); //Node´s kryptobiliotek

const generateHash = (...args) => {
  
  const hash = crypto.createHash("sha256"); //ange algoritm/sha256
  
  hash.update(args.sort().join(" ")); //här skapas hash
  
  return hash.digest("hex");
};

module.exports = generateHash;