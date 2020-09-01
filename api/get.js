const MongoClient = require("mongodb").MongoClient;

let cacheDb = null;
async function connectToDatabase() {
  if (cacheDb) return cacheDb;

  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const db = await client.db(new URL(uri).pathname.slice(1));
  cacheDb = db;

  return db;
}

async function search(title) {
  const db = await connectToDatabase();
  const collection = await db.collection("entries");
  const found = await collection.findOne({title});
  return found;
}

module.exports = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "max-age=0, s-maxage=86400");

  const { q } = req.query;
  if (!q) {
    res.status(400).json({error: "Missing query argument"});
    return;
  }

  const found = await search(q);
  if (!found) {
    res.status(400).json({error: "No result"});
    return;
  }
  res.status(200).json(found);
};
