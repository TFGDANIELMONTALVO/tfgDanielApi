import { GroupModel } from "../group.model.js";

export const groupDelete = async (req, res) => {
  try {
    await GroupModel.deleteOne({ _id: req.params.id });
    return res.json({ message: "Group removed successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Error" });
  }
};
