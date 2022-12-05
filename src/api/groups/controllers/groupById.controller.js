import { GroupModel } from "../group.model.js";

export const groupById = async (req, res) => {
    try {
      const group = await GroupModel.findById(req.params.id).populate(["users", "ownerId"]);
      return res.json(group);
    } catch (error) {
      return res.status(400).json({ message: "Resource not found" });
    }
  };