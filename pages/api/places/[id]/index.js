import dbConnect from "@/db/connect.js";
import Places from "@/db/models/Places.js";

export default async function handler(request, response) {
  const { id } = request.query;
  dbConnect();

  switch (request.method) {
    case "GET":
      try {
        const place = await Places.findById(id);
        response.status(200).json(place);
      } catch (error) {
        response.status(404).json({ status: error.message });
      }
      break;
    case "PUT":
      try {
        const editedPlace = request.body;
        const updatedPlace = await Places.findByIdAndUpdate(id, editedPlace);
        response.status(200).json(updatedPlace);
      } catch (error) {
        response.status(500).json({ status: error.message });
      }
      break;
    case "DELETE":
      try {
        await Places.findByIdAndDelete(id);
        response.status(200).json({ status: "Succesfully deleted" });
      } catch (error) {
        response.status(404).json({ status: error.message });
      }
      break;      
    default:
      response.status(404).json({ status: error.message });
      break;
  }
}
