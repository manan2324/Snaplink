import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    const { url, shortUrl } = await request.json();
    const client = await clientPromise;
    const db = client.db("snaplink");
    const collection = db.collection("url");

    const doc = await collection.findOne({ shortUrl: shortUrl });
    if (doc) {
        return Response.json({ success: false, error: true, message: "Custom URL already exists" });
    }

    const result = await collection.insertOne({
        url: url,
        shortUrl: shortUrl
    });

    return Response.json({ success: true, error: false, message: "URL Generated successfully" });
}