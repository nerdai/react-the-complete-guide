import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

// this function is run on the server
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const dbUrl = `mongodb+srv://nerdai:${process.env.DB_PASSWORD}@cluster0.d79yy1m.mongodb.net/meetupsDB?retryWrites=true&w=majority`;
    const client = await MongoClient.connect(dbUrl);
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
