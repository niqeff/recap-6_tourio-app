import dbConnect from "@/db/connect.js";
import Places from "@/db/models/Places.js";

export default async function handler(request, response) {
  dbConnect();
  const { id } = request.query;

  //const place = places.find((place) => place.id === id);

  if (request.method === "GET") {
    try {
      const place = await Places.findById(id);
      response.status(200).json(place);
      return;
    } catch (error) {
      response.status(404).json({ status: error.message });
      return;
    }
  }
}
