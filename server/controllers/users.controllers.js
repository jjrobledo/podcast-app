let Parser = require("rss-parser");
let parser = new Parser();

(async () => {
  let feed = await parser.parseURL("https://theblogmillionaire.libsyn.com/rss");
  console.log(feed);
})();
