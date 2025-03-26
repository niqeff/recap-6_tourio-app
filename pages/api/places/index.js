import dbConnect from "@/db/connect";
import Places from "@/db/models/Places";

export default async function handler(request, response) {
  await dbConnect();

  // if (request.method === "GET") {
  //   const places = await Places.find();
  //   response.status(200).json(places);
  //   return;
  // } else {
  //   response.status(405).json({ message: "Method not allowed" });
  //   return;
  // }

  // if (request.method === "POST") {
  //   const newPlaceData = request.body

  //   await Places.create(newPlaceData);
  //   response.status(201).json({message : "Place successfully added."});

  // }

  switch (request.method) {
    case "GET":
      const places = await Places.find();
      response.status(200).json(places);
      break;
    case "POST":
      const newPlaceData = request.body;
      await Places.create(newPlaceData);
      response.status(201).json({ message: "Place successfully added." });
    default:
      response.status(405).json({ message: "Method not allowed" });
      break;
  }
}
