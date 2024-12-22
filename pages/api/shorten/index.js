import clientPromise from "@/lib/mongodb";
import { nanoid } from "nanoid";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("urlShrivelDb");
  const collection = db.collection("urlShrivelCollection");

  // POST request

  if (req.method === "POST") {
    const { originalUrl, customName } = req.body;
    const shortCode = `${
      process.env.NEXT_PUBLIC_BASE_URL
    }/${customName}/${nanoid(7)}`;

    try {
      const newUrlDATA = {
        original_url: originalUrl,
        shortened_url: shortCode,
        createdAt: new Date().toISOString(),
      };
      const insertNewURL = await collection.insertOne(newUrlDATA);
      res
        .status(201)
        .json({ message: "New URL Created Successfully", data: insertNewURL });
    } catch (err) {
      res.status(500).json({ error: "Failed to shorten URL" });
    }
  } else if (req.method === "GET") {
    const allUrls = await collection.find().toArray();
    res.status(200).json({ message: "All URLs", data: allUrls });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
