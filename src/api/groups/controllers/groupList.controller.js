import { GroupModel } from "../group.model.js";

export const groupList = async (req, res) => {
  try {
    const groups = await GroupModel.find({}).populate(["ownerId", "users"]);
    return res.json({
      totalCount: groups.length,
      list: groups,
    });
  } catch (error) {
    return res.status(400).json({ message: "Error" });
  }
};
