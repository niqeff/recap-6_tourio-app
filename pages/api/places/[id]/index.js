import dbConnect from "@/db/connect.js";
import Places from "@/db/models/Places.js";

export default async function handler(request, response) {
  dbConnect();
  const { id } = request.query;

  switch (request.method) {
    case "GET":
      try {
        const place = await Places.findById(id);
        response.status(200).json(place);
        break;
      } catch (error) {
        response.status(404).json({ status: error.message });
        break;
      }
  }
}
