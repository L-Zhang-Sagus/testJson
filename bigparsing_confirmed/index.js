const fs = require('fs');
const JSONStream = require('JSONStream');

(async () => {
    const readable = fs.createReadStream('./input.json', {
      encoding: 'utf8',
      highWaterMark: 10
    })
    const parser = JSONStream.parse('.');
    readable.pipe(parser);
    parser.on('data', console.log);
  })()
