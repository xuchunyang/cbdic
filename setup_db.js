const fs = require("fs");
const MongoClient = require("mongodb").MongoClient;

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase(uri) {
  if (cachedDb) return cachedDb;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const db = await client.db(new URL(uri).pathname.slice(1));

  cachedClient = client;
  cachedDb = db;
  return db;
}

async function insertFileToDB(jsonFile, collection) {
  const contents = fs.readFileSync(jsonFile, "utf8");
  const data = JSON.parse(contents);
  await collection.createIndex(
    { title: 1 },
    {
      name: "检索字词"
    }
  );
  await collection.insertMany(data);
}

async function main() {
  const MONGODB_URI = process.env.MONGODB_URI;
  const db = await connectToDatabase(MONGODB_URI);
  const collection = await db.collection("entries");
  await insertFileToDB("dict-revised.json", collection);
  cachedClient.close();
}

main();
