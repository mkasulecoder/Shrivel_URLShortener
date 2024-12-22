import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("urlShrivelDb");
  const collection = db.collection("urlShrivelCollection");

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ message: "Missing id from the query" });
  }

  if (req.method === "GET") {
    try {
      const urlItem = await collection.findOne({ _id: new ObjectId(id) });

      if (!urlItem) {
        return req
          .status(404)
          .json({ message: "URL data object was not found in the DB" });
      }

      res.status(200).json({ message: "Found the URL data", data: urlItem });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Didn't find the URL data object the DB", err });
    }
  } else {
    res.status(405).json({ message: "Method is not Allowed" });
  }
}
