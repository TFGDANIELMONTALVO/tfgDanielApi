import { GroupModel } from "../group.model.js";

export const groupList = async (req, res) => {
  try {
    if (req.query.category && req.query.category.toString() === "Disney") {
      req.query.category = "Disney+"
    }
    const query = {
      deletedAt: null,
      ...(req.query.ownerId && {ownerId: {$ne:req.query.ownerId}}),
      ...(req.query.ownerId && {users: {$ne: [req.query.ownerId]}}),
      ...(req.query.category && {category: req.query.category})
    }
    const groups = await GroupModel.find(query).sort({createdAt : -1}).populate(["ownerId", "users"]);
    return res.json({
      totalCount: groups.length,
      list: groups,
    });
  } catch (error) {
    return res.status(400).json({ message: "Error" });
  }
};
